import { Injectable } from '@angular/core';
import { ILevel } from '../../../shared/models/interfaces/level.interface';
import { DirTypeEnum } from '../../../shared/models/enums/direction.enum';
import { IEnemy } from '../../../shared/models/interfaces/enemy.interface';
import { ActionTypeEnum } from '../../../shared/models/enums/action.enum';

@Injectable({
  providedIn: 'root',
})
export class EnemyService {
  public updateEnemies = (level: ILevel): void => {
    for (const enemy of level.enemies) {
      if (!this.intersectRange(level.player.x, level.player.x + level.player.w, enemy.spawnx1, enemy.spawnx2)) {
        this.resetEnemyPos(enemy);
        continue;
      }
      enemy.verticalVelocity += level.gravity;
      if (enemy.verticalVelocity > enemy.mFallSpeed) {
        enemy.verticalVelocity = enemy.mFallSpeed;
      }
      if (!enemy.isFlying || enemy.action === ActionTypeEnum.DEAD) {
        enemy.y += enemy.verticalVelocity;
        enemy.hitbox.y += enemy.verticalVelocity;
      }
      if (enemy.action === ActionTypeEnum.DEAD) {
        enemy.mSpeed = enemy.horizontalVelocity;
        enemy.horizontalVelocity--;
        if (enemy.horizontalVelocity < 0) {
          enemy.horizontalVelocity = 0;
        }
      }
      const moveX = Math.trunc(enemy.dir === DirTypeEnum.RIGHT ? enemy.mSpeed : -enemy.mSpeed) + enemy.pushVelocityX;
      if (enemy.pushVelocityX > 0) {
        enemy.pushVelocityX--;
      }
      if (enemy.pushVelocityX < 0) {
        enemy.pushVelocityX++;
      }
      enemy.x += moveX;
      enemy.hitbox.x += moveX;
      this.checkPlatformCollision(enemy);
      this.checkWallCollision(enemy);
      this.handleEnemyAnimation(enemy);
    }
  };

  private checkWallCollision = (enemy: IEnemy): void => {
    for (const wall of [...enemy.softWalls, ...enemy.hardWalls]) {
      if (
        this.intersectRect(
          enemy.hitbox.x,
          enemy.hitbox.y,
          enemy.hitbox.w,
          enemy.hitbox.h,
          wall.x,
          wall.y,
          wall.w,
          wall.h
        )
      ) {
        if (enemy.action === ActionTypeEnum.DEAD) {
          enemy.x -= enemy.dir === DirTypeEnum.RIGHT ? enemy.mSpeed : -enemy.mSpeed;
          enemy.hitbox.x -= enemy.dir === DirTypeEnum.RIGHT ? enemy.mSpeed : -enemy.mSpeed;
        } else {
          if (enemy.dir === DirTypeEnum.LEFT) {
            enemy.dir = DirTypeEnum.RIGHT;
            enemy.x -= enemy.pushVelocityX;
            enemy.hitbox.x -= enemy.pushVelocityX;
            enemy.pushVelocityX = 0;
          } else {
            enemy.dir = DirTypeEnum.LEFT;
            enemy.x -= enemy.pushVelocityX;
            enemy.hitbox.x -= enemy.pushVelocityX;
            enemy.pushVelocityX = 0;
          }
        }
        return;
      }
    }
  };

  private checkPlatformCollision = (enemy: IEnemy): void => {
    for (const floor of enemy.floors) {
      if (
        this.intersectRect(
          enemy.hitbox.x,
          enemy.hitbox.y + enemy.hitbox.h - enemy.mFallSpeed,
          enemy.hitbox.w,
          enemy.mFallSpeed,
          floor.x,
          floor.y,
          floor.w,
          enemy.mFallSpeed
        )
      ) {
        const hitboxOffset = enemy.hitbox.y - enemy.y;
        enemy.y = floor.y - enemy.h + enemy.groundOffset;
        enemy.hitbox.y = floor.y - enemy.h + hitboxOffset + enemy.groundOffset;
        if (enemy.action === ActionTypeEnum.DEAD) {
          enemy.x -= enemy.dir === DirTypeEnum.RIGHT ? enemy.mSpeed : -enemy.mSpeed;
          enemy.hitbox.x -= enemy.dir === DirTypeEnum.RIGHT ? enemy.mSpeed : -enemy.mSpeed;
        }
        return;
      }
    }
  };

  private handleEnemyAnimation = (enemy: IEnemy): void => {
    if (enemy.action === ActionTypeEnum.DEAD) {
      enemy.animationCounter = 1;
      return;
    }

    enemy.animationCounterDelay++;
    if (enemy.animationCounterDelay === 3) {
      enemy.animationCounterDelay = 0;
      enemy.animationCounter = (enemy.animationCounter % (enemy.animationFrames ?? 4)) + 1;
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

  private resetEnemyPos = (enemy: IEnemy): void => {
    enemy.x = enemy.xo;
    enemy.y = enemy.yo;
    enemy.hitbox.x = enemy.hitboxxo;
    enemy.hitbox.y = enemy.hitboxyo;
    enemy.horizontalVelocity = enemy.hvo;
    enemy.verticalVelocity = enemy.vvo;
    enemy.action = enemy.actiono;
    enemy.animationCounter = enemy.anco;
    enemy.animationCounterDelay = enemy.ancdo;
    enemy.dir = enemy.diro;
    enemy.mSpeed = enemy.mso;
    enemy.softWalls = enemy.swo;
  };
}
