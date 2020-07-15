import { Injectable } from '@angular/core';
import { ILevel } from '../../../shared/models/interfaces/level.interface';
import { ActionTypeEnum } from '../../../shared/models/enums/action.enum';
import { IPlayer } from '../../../shared/models/interfaces/player.interface';
import { DirTypeEnum } from '../../../shared/models/enums/direction.enum';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private animationTimer = 0;
  private bufferedDir: DirTypeEnum;
  private punchCooldown = 0;
  private punchBuffer = false;
  private movementBuffer = false;
  private jumpBuffer = false;
  private cancelBuffer = false;
  private stopBuffer = false;
  private canJump = true;

  public updatePlayer = (level: ILevel): void => {
    level.player.verticalVelocity += level.gravity;
    if (level.player.verticalVelocity > level.maxFallSpeed) {
      level.player.verticalVelocity = level.maxFallSpeed;
    }
    if (
      level.player.verticalAction === ActionTypeEnum.FALLING ||
      level.player.verticalAction === ActionTypeEnum.JUMPING
    ) {
      level.player.y += level.player.verticalVelocity;
    }
    if (this.punchBuffer && this.punchCooldown === 0) {
      level.player.blockingAction = ActionTypeEnum.PUNCHING;
      this.punchCooldown = 12;
      this.animationTimer = 0;
      level.player.animationCounter = 1;
    }
    if (this.bufferedDir && level.player.blockingAction === ActionTypeEnum.NONE) {
      level.player.dir = this.bufferedDir;
    }
    if (this.stopBuffer) {
      if (level.player.blockingAction !== ActionTypeEnum.PUNCHING) {
        level.player.animationCounter = 1;
      }
      level.player.action = ActionTypeEnum.NONE;
      this.stopBuffer = false;
    }
    if (this.movementBuffer) {
      this.movementBuffer = false;
      level.player.action = ActionTypeEnum.MOVING;
    }
    if (level.player.action === ActionTypeEnum.MOVING || level.player.blockingAction === ActionTypeEnum.PUNCHING) {
      const multiplier = level.player.blockingAction === ActionTypeEnum.PUNCHING ? 1.5 : 1;
      level.player.x += Math.trunc(
        level.player.dir === DirTypeEnum.RIGHT ? level.player.mSpeed * multiplier : -level.player.mSpeed * multiplier
      );
    }

    this.checkPlatformCollision(level);
    this.checkWallCollision(level);
    this.handlePlayerAnimation(level.player);
  };

  public setBufferedDir = (dir: DirTypeEnum): void => {
    this.bufferedDir = dir;
  };

  public bufferMovement = (): void => {
    this.movementBuffer = true;
  };

  public movementBeingBuffered = (): boolean => {
    return this.movementBuffer;
  };

  public bufferPunch = (shouldStartBuffer: boolean): void => {
    this.punchBuffer = shouldStartBuffer;
  };

  public bufferJump = (): void => {
    this.jumpBuffer = true;
  };

  public bufferCancel = (): void => {
    this.cancelBuffer = true;
  };

  public getCanJump = (): boolean => {
    return this.canJump;
  };

  public getCanCancel = (): boolean => {
    return !this.canJump || this.jumpBuffer;
  };

  public bufferStop = (): void => {
    this.stopBuffer = true;
  };

  private checkWallCollision = (level: ILevel): void => {
    const player = level.player;
    for (const wall of level.walls) {
      if (
        this.intersectRect(
          player.x + 30,
          player.y + 20,
          player.w - 60,
          25,
          wall.x + 25,
          wall.y + wall.h - 25,
          wall.w - 50,
          25
        )
      ) {
        level.player.y = wall.y + wall.h - 20;
        return;
      }
      if (
        this.intersectRect(
          player.x,
          player.y + 10,
          player.mSpeed * 1.5,
          player.h - 10,
          wall.x + wall.w - player.mSpeed - 35,
          wall.y + level.maxFallSpeed,
          player.mSpeed,
          wall.h - level.maxFallSpeed * 2
        )
      ) {
        level.player.x = wall.x + wall.w - 35;
        return;
      }
      if (
        this.intersectRect(
          player.x + player.w - player.mSpeed * 1.5,
          player.y + 10,
          player.mSpeed * 1.5,
          player.h - 10,
          wall.x + player.mSpeed + 35,
          wall.y + level.maxFallSpeed,
          player.mSpeed,
          wall.h - level.maxFallSpeed * 2
        )
      ) {
        level.player.x = wall.x + 35 - player.w;
        return;
      }
    }
  };

  private checkPlatformCollision = (level: ILevel): void => {
    const player = level.player;
    for (const platform of level.platforms) {
      if (
        this.intersectRect(
          player.x,
          player.y + player.h - level.maxFallSpeed,
          player.w,
          level.maxFallSpeed,
          platform.x + 30,
          platform.y + 10,
          platform.w - 60,
          level.maxFallSpeed
        )
      ) {
        this.handlePlatformCollision(level, platform.y + 10 - player.h);
        return;
      }
    }
    if (level.player.verticalAction !== ActionTypeEnum.FALLING && level.player.verticalVelocity >= 0) {
      level.player.verticalAction = ActionTypeEnum.FALLING;
      if (level.player.blockingAction !== ActionTypeEnum.PUNCHING) {
        level.player.animationCounter = 1;
        this.animationTimer = 0;
      }
    }
    if (this.cancelBuffer) {
      level.player.verticalAction = ActionTypeEnum.FALLING;
      level.player.blockingAction = ActionTypeEnum.NONE;
      level.player.animationCounter = 1;
      this.animationTimer = 0;
      this.cancelBuffer = false;
      level.player.verticalVelocity = level.maxFallSpeed;
    }
  };

  private handlePlatformCollision = (level: ILevel, y: number): void => {
    level.player.y = y;
    if (level.player.verticalAction === ActionTypeEnum.FALLING) {
      level.player.verticalAction = ActionTypeEnum.NONE;
      this.canJump = true;
    }
    if (this.jumpBuffer) {
      this.jumpBuffer = false;
      this.canJump = false;
      level.player.verticalAction = ActionTypeEnum.JUMPING;
      level.player.blockingAction = ActionTypeEnum.NONE;
      this.punchCooldown = 0;
      level.player.verticalVelocity = level.jumpPower;
      level.player.animationCounter = 1;
      this.animationTimer = 0;
    }
  };

  private checkMapCollision = (level: ILevel): void => {
    //
  };

  private handlePlayerAnimation = (player: IPlayer): void => {
    if (this.punchCooldown > 0 && player.blockingAction !== ActionTypeEnum.PUNCHING) {
      this.punchCooldown--;
    }
    this.animationTimer++;
    if (this.animationTimer === 3) {
      this.animationTimer = 0;
      if (player.blockingAction === ActionTypeEnum.PUNCHING) {
        player.animationCounter += 1;
        if (player.animationCounter === 5) {
          player.animationCounter = 1;
          player.blockingAction = ActionTypeEnum.NONE;
        } else {
          return;
        }
      }
      if (player.verticalAction === ActionTypeEnum.NONE) {
        player.animationCounter = (player.animationCounter % 8) + 1;
      } else {
        if (player.verticalAction === ActionTypeEnum.FALLING) {
          player.animationCounter = Math.min(player.animationCounter + 1, 2);
        }
        if (player.verticalAction === ActionTypeEnum.JUMPING) {
          player.animationCounter = Math.min(player.animationCounter + 1, 4);
        }
      }
    }
  };

  private intersectRect = (
    x1: number,
    y1: number,
    w1: number,
    h1: number,
    x2: number,
    y2: number,
    w2: number,
    h2: number
  ): boolean => {
    return this.intersectRange(x1, x1 + w1, x2, x2 + w2) && this.intersectRange(y1, y1 + h1, y2, y2 + h2);
  };
  private intersectRange = (ax1: number, ax2: number, bx1: number, bx2: number): boolean => {
    return Math.max(ax1, bx1) <= Math.min(ax2, bx2);
  };
}
