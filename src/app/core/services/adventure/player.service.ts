import { Injectable } from '@angular/core';
import { ILevel } from '../../../shared/models/interfaces/level.interface';
import { ActionTypeEnum } from '../../../shared/models/enums/action.enum';
import { IPlayer } from '../../../shared/models/interfaces/player.interface';
import { DirTypeEnum } from '../../../shared/models/enums/direction.enum';
import { AvailabilityTypeEnum } from '../../../shared/models/enums/availabilityType.enum';
import { IEnemy } from '../../../shared/models/interfaces/enemy.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private animationTimer = 0;
  private bufferedDir: DirTypeEnum;
  private punchCooldown = 0;
  private dmgCooldown = 0;
  private immunityCooldown = 0;
  private punchBuffer = false;
  private movementBuffer = false;
  private jumpBuffer = false;
  private cancelBuffer = false;
  private stopBuffer = false;
  private canJump = true;
  private updateGemAnimation = false;

  public setUp = (): void => {
    this.animationTimer = 0;
    this.punchCooldown = 0;
    this.dmgCooldown = 0;
    this.immunityCooldown = 0;
    this.punchBuffer = false;
    this.movementBuffer = false;
    this.jumpBuffer = false;
    this.cancelBuffer = false;
    this.stopBuffer = false;
    this.canJump = true;
    this.updateGemAnimation = false;
  };

  public updatePlayer = (level: ILevel): void => {
    if (this.dmgCooldown === 0 && level.player.blockingAction === ActionTypeEnum.DAMAGE) {
      level.player.blockingAction = ActionTypeEnum.NONE;
      this.immunityCooldown = 40;
    }
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
    if (this.bufferedDir && level.player.blockingAction === ActionTypeEnum.NONE) {
      level.player.dir = this.bufferedDir;
    }
    if (this.punchBuffer && this.punchCooldown === 0 && level.player.blockingAction !== ActionTypeEnum.DAMAGE) {
      level.player.blockingAction = ActionTypeEnum.PUNCHING;
      this.punchCooldown = 12;
      this.animationTimer = 0;
      level.player.animationCounter = 1;
    }
    if (this.stopBuffer) {
      if (
        level.player.blockingAction !== ActionTypeEnum.PUNCHING &&
        level.player.verticalAction === ActionTypeEnum.NONE
      ) {
        level.player.animationCounter = 1;
      }
      level.player.action = ActionTypeEnum.NONE;
      this.stopBuffer = false;
    }
    if (this.movementBuffer) {
      this.movementBuffer = false;
      level.player.action = ActionTypeEnum.MOVING;
    }
    if (level.player.action === ActionTypeEnum.MOVING || level.player.blockingAction !== ActionTypeEnum.NONE) {
      const multiplier =
        level.player.blockingAction === ActionTypeEnum.PUNCHING
          ? 1.5
          : level.player.blockingAction === ActionTypeEnum.DAMAGE
          ? 0.8
          : 1;
      level.player.x += Math.trunc(
        level.player.dir === DirTypeEnum.RIGHT ? level.player.mSpeed * multiplier : -level.player.mSpeed * multiplier
      );
    }
    this.checkGems(level);
    this.checkPortals(level);
    this.checkPlatformCollision(level);
    this.checkJumpZones(level);
    this.checkWallCollision(level);
    this.checkEnemyCollision(level);
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

  public checkDeath = (level: ILevel): boolean => {
    return level.player.y >= level.height;
  };

  public checkJumpZones = (level: ILevel): void => {
    const player = level.player;
    const tryJump = this.jumpBuffer;
    for (const jumpZone of level.jumpzones) {
      if (this.updateGemAnimation) {
        jumpZone.animationCounter = (jumpZone.animationCounter % 5) + 1;
      }
      if (jumpZone.availability === AvailabilityTypeEnum.UNAVAILABLE) {
        if (!this.canJump) {
          for (const sprite of jumpZone.drawables) {
            sprite.name = 'jumpzonesingle' + jumpZone.availability;
            sprite.animationCounter = jumpZone.animationCounter;
          }
          continue;
        }
      }
      if (
        this.intersectRect(
          player.x + 45,
          player.y + 45,
          10,
          10,
          jumpZone.area.x,
          jumpZone.area.y,
          jumpZone.area.w,
          jumpZone.area.h
        )
      ) {
        if (jumpZone.availability === AvailabilityTypeEnum.AVAILABLE) {
          jumpZone.availability = AvailabilityTypeEnum.READY;
        }
        if (tryJump && player.blockingAction !== ActionTypeEnum.DAMAGE) {
          jumpZone.availability = AvailabilityTypeEnum.UNAVAILABLE;
          this.jumpBuffer = false;
          this.canJump = false;
          level.player.verticalAction = ActionTypeEnum.JUMPING;
          level.player.blockingAction = ActionTypeEnum.NONE;
          this.punchCooldown = 0;
          level.player.verticalVelocity = level.jumpPower;
          level.player.animationCounter = 1;
          this.animationTimer = 0;
        }
      } else {
        jumpZone.availability = AvailabilityTypeEnum.AVAILABLE;
      }
      for (const sprite of jumpZone.drawables) {
        sprite.name = 'jumpzonesingle' + jumpZone.availability;
        sprite.animationCounter = jumpZone.animationCounter;
      }
    }
    if (tryJump) {
      this.jumpBuffer = false;
    }
  };

  public checkGems = (level: ILevel): void => {
    const player = level.player;

    for (const gem of level.gems) {
      if (this.updateGemAnimation) {
        gem.animationCounter = (gem.animationCounter % 8) + 1;
      }
      if (
        this.intersectRect(
          player.x + 30,
          player.y + 10,
          player.w - 60,
          player.h - 10,
          gem.x + 30,
          gem.y + 30,
          gem.w - 60,
          gem.h - 60
        )
      ) {
        level.gems.splice(level.gems.indexOf(gem), 1);
        level.centerLayer.splice(level.centerLayer.indexOf(gem), 1);
        if (gem.name === 'Col') {
          player.gems.push(gem);
        } else {
          player.bigGems.push(gem);
        }
      }
    }
    if (!this.updateGemAnimation) {
      this.updateGemAnimation = true;
    } else {
      this.updateGemAnimation = false;
    }
  };

  public checkPortals = (level: ILevel): void => {
    const player = level.player;
    for (const portal of level.portals) {
      if (portal.distance !== player.distance) {
        continue;
      }
      if (this.intersectRect(player.x, player.y, player.w, player.h, portal.x, portal.y, portal.w, portal.h)) {
        if (portal.destX) {
          player.x = portal.destX;
        }
        if (portal.destY) {
          player.y = portal.destY;
        }
        if (portal.destDistance) {
          player.distance = portal.destDistance;
        }
      }
    }
  };

  private checkWallCollision = (level: ILevel): void => {
    const player = level.player;
    for (const wall of level.walls) {
      if (wall.distance !== player.distance) {
        continue;
      }
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
      if (platform.distance !== player.distance) {
        continue;
      }
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
      level.player.animationCounter = 1;
      this.cancelBuffer = false;
      level.player.verticalVelocity = level.maxFallSpeed;
    }
  };

  private checkEnemyCollision = (level: ILevel): void => {
    if (level.player.blockingAction === ActionTypeEnum.DAMAGE) {
      return;
    }
    const player = level.player;
    for (const enemy of level.enemies) {
      if (enemy.distance !== player.distance || enemy.action === ActionTypeEnum.DEAD) {
        continue;
      }
      if (
        player.verticalAction === ActionTypeEnum.FALLING &&
        this.intersectRect(
          player.x + 30,
          player.y + player.h - level.maxFallSpeed,
          player.w - 60,
          level.maxFallSpeed,
          enemy.hitbox.x,
          enemy.hitbox.y,
          enemy.hitbox.w,
          enemy.hitbox.h
        )
      ) {
        this.handleJumpOnEnemy(player, enemy);
        return;
      }
      if (
        player.blockingAction === ActionTypeEnum.PUNCHING &&
        this.intersectRect(
          player.dir === DirTypeEnum.LEFT ? player.x - 10 : player.x + 50,
          player.y + 10,
          60,
          80,
          enemy.hitbox.x,
          enemy.hitbox.y,
          enemy.hitbox.w,
          enemy.hitbox.h
        )
      ) {
        this.handlePunchEnemy(player, enemy);
        return;
      }
      if (
        player.blockingAction !== ActionTypeEnum.DAMAGE &&
        this.immunityCooldown === 0 &&
        this.intersectRect(
          player.x + 40,
          player.y + 40,
          20,
          50,
          enemy.hitbox.x + enemy.hitbox.w / 2,
          enemy.hitbox.y,
          enemy.hitbox.w / 2,
          enemy.hitbox.h
        )
      ) {
        player.dir = DirTypeEnum.RIGHT;
        this.handleDmgEnemy(player);
        return;
      }
      if (
        player.blockingAction !== ActionTypeEnum.DAMAGE &&
        this.immunityCooldown === 0 &&
        this.intersectRect(
          player.x + 40,
          player.y + 40,
          20,
          50,
          enemy.hitbox.x,
          enemy.hitbox.y,
          enemy.hitbox.w / 2,
          enemy.hitbox.h
        )
      ) {
        player.dir = DirTypeEnum.LEFT;
        this.handleDmgEnemy(player);
        return;
      }
    }
  };

  private handlePlatformCollision = (level: ILevel, y: number): void => {
    level.player.y = y;
    if (
      level.player.verticalAction === ActionTypeEnum.FALLING ||
      (level.player.verticalAction === ActionTypeEnum.JUMPING && level.player.verticalVelocity >= 0)
    ) {
      level.player.verticalAction = ActionTypeEnum.NONE;
      this.canJump = true;
      for (const jumpZone of level.jumpzones) {
        jumpZone.availability = AvailabilityTypeEnum.AVAILABLE;
      }
    }
    if (this.jumpBuffer && this.getCanJump() && level.player.blockingAction !== ActionTypeEnum.DAMAGE) {
      this.canJump = false;
      level.player.verticalAction = ActionTypeEnum.JUMPING;
      level.player.blockingAction = ActionTypeEnum.NONE;
      this.punchCooldown = 0;
      level.player.verticalVelocity = level.jumpPower;
      level.player.animationCounter = 1;
      this.animationTimer = 0;
    }
  };

  private handleJumpOnEnemy = (player: IPlayer, enemy: IEnemy): void => {
    player.verticalAction = ActionTypeEnum.JUMPING;
    if (player.blockingAction !== ActionTypeEnum.PUNCHING) {
      player.animationCounter = 1;
      this.animationTimer = 0;
    }
    player.verticalVelocity = -15;
    enemy.action = ActionTypeEnum.DEAD;
    enemy.animationCounter = 1;
  };

  private handlePunchEnemy = (player: IPlayer, enemy: IEnemy): void => {
    enemy.action = ActionTypeEnum.DEAD;
    enemy.softWalls = [];
    enemy.dir = player.dir;
    enemy.animationCounter = 1;
    enemy.verticalVelocity = enemy.deathVelocityY;
    enemy.horizontalVelocity = enemy.deathVelocityX;
  };

  private handleDmgEnemy = (player: IPlayer): void => {
    player.blockingAction = ActionTypeEnum.DAMAGE;
    player.verticalAction = ActionTypeEnum.FALLING;
    player.animationCounter = 1;
    player.verticalVelocity = 0;
    this.dmgCooldown = 15;
    player.health--;
  };

  private checkMapCollision = (level: ILevel): void => {
    //
  };

  private handlePlayerAnimation = (player: IPlayer): void => {
    if (this.immunityCooldown > 0) {
      this.immunityCooldown--;
      if (this.immunityCooldown % 8 > 3) {
        player.hidden = true;
      } else {
        player.hidden = false;
      }
    }
    if (this.punchCooldown > 0 && player.blockingAction !== ActionTypeEnum.PUNCHING) {
      this.punchCooldown--;
    }
    if (this.dmgCooldown > 0) {
      this.dmgCooldown--;

      return;
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
