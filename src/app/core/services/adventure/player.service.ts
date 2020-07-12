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
    if (this.bufferedDir) {
      level.player.dir = this.bufferedDir;
    }
    if (this.movementBuffer) {
      level.player.action = ActionTypeEnum.MOVING;
      this.movementBuffer = false;
    }
    if (this.stopBuffer) {
      level.player.action = ActionTypeEnum.NONE;
      this.stopBuffer = false;
    }
    if (level.player.action === ActionTypeEnum.MOVING) {
      level.player.x += level.player.dir === DirTypeEnum.RIGHT ? level.player.mSpeed : -level.player.mSpeed;
    }

    this.checkMapCollision(level);
    this.handlePlayerAnimation(level.player);
  };

  public setBufferedDir = (dir: DirTypeEnum): void => {
    this.bufferedDir = dir;
  };

  public bufferMovement = (): void => {
    this.movementBuffer = true;
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

  private checkMapCollision = (level: ILevel): void => {
    if (level.player.y >= level.height - 2 * level.player.h) {
      if (level.player.verticalAction === ActionTypeEnum.FALLING) {
        level.player.verticalAction = ActionTypeEnum.NONE;
        this.canJump = true;
      }
      if (this.jumpBuffer) {
        this.jumpBuffer = false;
        this.canJump = false;
        level.player.verticalAction = ActionTypeEnum.JUMPING;
        level.player.verticalVelocity = -25;
        level.player.animationCounter = 1;
        this.animationTimer = 0;
      }
    } else {
      if (level.player.verticalAction !== ActionTypeEnum.FALLING && level.player.verticalVelocity >= 0) {
        level.player.verticalAction = ActionTypeEnum.FALLING;
        level.player.animationCounter = 1;
        this.animationTimer = 0;
      }
      if (this.cancelBuffer) {
        level.player.verticalAction = ActionTypeEnum.FALLING;
        level.player.animationCounter = 1;
        this.animationTimer = 0;
        this.cancelBuffer = false;
        level.player.verticalVelocity = level.maxFallSpeed;
      }
    }
  };

  private handlePlayerAnimation = (player: IPlayer): void => {
    this.animationTimer++;
    if (this.animationTimer === 4) {
      this.animationTimer = 0;
      if (player.verticalAction === ActionTypeEnum.NONE) {
        if (player.action === ActionTypeEnum.NONE) {
          player.animationCounter = (player.animationCounter % 3) + 1;
        } else {
          if (player.action === ActionTypeEnum.MOVING) {
            player.animationCounter = (player.animationCounter % 4) + 1;
          }
        }
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
}
