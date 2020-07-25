import { Injectable } from '@angular/core';
import { DirTypeEnum } from '../../../shared/models/enums/direction.enum';
import { ActionTypeEnum } from '../../../shared/models/enums/action.enum';
import { ILevel } from '../../../shared/models/interfaces/level.interface';
import { AvailabilityTypeEnum } from '../../../shared/models/enums/availabilityType.enum';
import { IDrawable } from '../../../shared/models/interfaces/drawable.interface';
import { IBlock } from '../../../shared/models/interfaces/block.interface';
import { IJumpzone } from '../../../shared/models/interfaces/jumpzone.interface';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  public getLevel1 = (): ILevel => {
    const level1: ILevel = {
      code: '1',
      width: 9300,
      height: 2400,
      player: {
        x: 300,
        y: 1800,
        w: 100,
        h: 100,
        verticalVelocity: 10,
        animationCounter: 1,
        distance: 1,
        mSpeed: 10,
        dir: DirTypeEnum.RIGHT,
        dmgDir: DirTypeEnum.LEFT,
        action: ActionTypeEnum.NONE,
        verticalAction: ActionTypeEnum.NONE,
        blockingAction: ActionTypeEnum.NONE,
        name: 'player',
        gems: [],
        bigGems: [],
        hidden: false,
        health: 4,
      },
      camera: {
        x: 100,
        y: 100,
        w: 800,
        h: 500,
      },
      platforms: [],
      walls: [],
      portals: [],
      gems: [],
      jumpzones: [],
      enemies: [],
      skyLineLayer: [],
      backLayer: [],
      centerLayer: [],
      frontLayer: [],
      gravity: 2,
      jumpPower: -25,
      maxFallSpeed: 15,
      finish: { x: 9000, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Finish' },
    };

    level1.platforms.push(
      { x: 100, y: 0, w: 100, h: 2200, distance: 1, name: 'ground-middle-right' },
      { x: 100, y: 2200, w: 100, h: 100, distance: 1, name: 'ground-middle-full-corner-r' },
      { x: 200, y: 2200, w: 1300, h: 100, distance: 1, name: 'ground-upper-full' },
      { x: 1500, y: 2200, w: 100, h: 100, distance: 1, name: 'ground-upper-right' },
      { x: 1700, y: 2200, w: 100, h: 100, distance: 1, name: 'ground-upper-left' },
      { x: 1800, y: 2200, w: 500, h: 100, distance: 1, name: 'ground-upper-full' },
      { x: 2300, y: 2200, w: 100, h: 100, distance: 1, name: 'ground-upper-right' },
      { x: 2500, y: 2100, w: 100, h: 100, distance: 1, name: 'platform-left' },
      { x: 2600, y: 2100, w: 300, h: 100, distance: 1, name: 'platform-full' },
      { x: 2900, y: 2100, w: 100, h: 100, distance: 1, name: 'platform-right' },
      { x: 3100, y: 2100, w: 100, h: 100, distance: 1, name: 'platform-left' },
      { x: 3200, y: 2100, w: 300, h: 100, distance: 1, name: 'platform-full' },
      { x: 4500, y: 2200, w: 100, h: 100, distance: 1.2, name: 'ground-z-back-left' },
      { x: 4600, y: 2200, w: 500, h: 100, distance: 1.2, name: 'ground-upper-full' },
      { x: 5099, y: 2200, w: 100, h: 100, distance: 1.2, name: 'ground-upper-right' },
      { x: 4490, y: 2200, w: 100, h: 100, distance: 1.18, name: 'ground-z-front-full' },
      { x: 4480, y: 2200, w: 100, h: 100, distance: 1.16, name: 'ground-z-front-full' },
      { x: 4470, y: 2200, w: 100, h: 100, distance: 1.14, name: 'ground-z-front-full' },
      { x: 4460, y: 2200, w: 100, h: 100, distance: 1.12, name: 'ground-z-front-full' },
      { x: 4450, y: 2200, w: 100, h: 100, distance: 1.1, name: 'ground-z-front-full' },
      { x: 4440, y: 2200, w: 100, h: 100, distance: 1.08, name: 'ground-z-front-full' },
      { x: 4430, y: 2200, w: 100, h: 100, distance: 1.06, name: 'ground-z-front-full' },
      { x: 4420, y: 2200, w: 100, h: 100, distance: 1.04, name: 'ground-z-front-full' },
      { x: 4410, y: 2200, w: 100, h: 100, distance: 1.02, name: 'ground-z-front-full' },
      { x: 4400, y: 2200, w: 100, h: 100, distance: 1, name: 'ground-z-front-right' },
      { x: 3500, y: 2100, w: 100, h: 100, distance: 1, name: 'platform-right' },
      { x: 3800, y: 2200, w: 100, h: 100, distance: 1, name: 'ground-upper-left' },
      { x: 3900, y: 2200, w: 500, h: 100, distance: 1, name: 'ground-upper-full' },
      { x: 5300, y: 2100, w: 100, h: 100, distance: 1.2, name: 'platform-small' },
      { x: 5500, y: 2000, w: 100, h: 100, distance: 1.2, name: 'platform-small' },
      { x: 5650, y: 1800, w: 100, h: 100, distance: 1.2, name: 'platform-small' },
      { x: 5400, y: 1850, w: 100, h: 100, distance: 1.2, name: 'platform-small' },
      { x: 5650, y: 1700, w: 101, h: 100, distance: 1.2, name: 'platform-left' },
      { x: 5750, y: 1700, w: 100, h: 100, distance: 1.2, name: 'platform-right' },
      { x: 5950, y: 1700, w: 101, h: 100, distance: 1.2, name: 'platform-left' },
      { x: 6050, y: 1700, w: 100, h: 100, distance: 1.2, name: 'platform-right' },
      { x: 6350, y: 1700, w: 101, h: 100, distance: 1.2, name: 'platform-left' },
      { x: 6450, y: 1700, w: 100, h: 100, distance: 1.2, name: 'platform-right' },
      { x: 6750, y: 1700, w: 100, h: 100, distance: 1.2, name: 'ground-upper-small' },
      { x: 6950, y: 1200, w: 100, h: 100, distance: 1.2, name: 'ground-upper-small' },
      { x: 6750, y: 2300, w: 101, h: 100, distance: 1.2, name: 'ground-upper-left' },
      { x: 6850, y: 2300, w: 450, h: 100, distance: 1.2, name: 'ground-upper-full' },
      { x: 7200, y: 2300, w: 101, h: 100, distance: 1.2, name: 'ground-upper-right' },
      { x: 7500, y: 2300, w: 101, h: 100, distance: 1.2, name: 'ground-upper-left' },
      { x: 7600, y: 2300, w: 200, h: 100, distance: 1.2, name: 'ground-upper-full' },
      { x: 7800, y: 2300, w: 101, h: 100, distance: 1.2, name: 'ground-upper-right' },
      { x: 8100, y: 2300, w: 101, h: 100, distance: 1.2, name: 'ground-upper-left' },
      { x: 8200, y: 2300, w: 200, h: 100, distance: 1.2, name: 'ground-upper-full' },
      { x: 8400, y: 2300, w: 101, h: 100, distance: 1.2, name: 'ground-upper-right' },
      { x: 8800, y: 2300, w: 101, h: 100, distance: 1.2, name: 'ground-upper-left' },
      { x: 8900, y: 2300, w: 200, h: 100, distance: 1.2, name: 'ground-upper-full' },
      { x: 9100, y: 2300, w: 101, h: 100, distance: 1.2, name: 'ground-upper-right' }
    );

    level1.walls.push(
      { x: 100, y: 0, w: 100, h: 2200, distance: 1, name: 'wall' },
      { x: 1500, y: 2200, w: 100, h: 100, distance: 1, name: 'wall' },
      { x: 1700, y: 2200, w: 100, h: 100, distance: 1, name: 'wall' },
      { x: 2300, y: 2200, w: 100, h: 100, distance: 1, name: 'wall' },
      { x: 3800, y: 2200, w: 100, h: 200, distance: 1, name: 'wall' },
      { x: 5100, y: 2200, w: 100, h: 200, distance: 1.2, name: 'wall' },

      { x: 6750, y: 1700, w: 100, h: 500, distance: 1.2, name: 'wall' },
      { x: 6950, y: 1200, w: 100, h: 1000, distance: 1.2, name: 'wall' },
      { x: 6750, y: 2300, w: 100, h: 100, distance: 1.2, name: 'wall' },
      { x: 7200, y: 2300, w: 100, h: 100, distance: 1.2, name: 'wall' },
      { x: 7500, y: 2300, w: 100, h: 100, distance: 1.2, name: 'wall' },
      { x: 7800, y: 2300, w: 100, h: 100, distance: 1.2, name: 'wall' },
      { x: 8100, y: 2300, w: 100, h: 100, distance: 1.2, name: 'wall' },
      { x: 8400, y: 2300, w: 100, h: 100, distance: 1.2, name: 'wall' },
      { x: 8800, y: 2300, w: 100, h: 100, distance: 1.2, name: 'wall' },
      { x: 9100, y: 2300, w: 100, h: 100, distance: 1.2, name: 'wall' }
    );

    level1.portals.push(
      { x: 4501, y: 2000, w: 100, h: 200, distance: 1, name: 'portal', destX: 4410, destDistance: 1.02 },
      { x: 4511, y: 2000, w: 100, h: 200, distance: 1.02, name: 'portal', destX: 4420, destDistance: 1.04 },
      { x: 4521, y: 2000, w: 100, h: 200, distance: 1.04, name: 'portal', destX: 4430, destDistance: 1.06 },
      { x: 4531, y: 2000, w: 100, h: 200, distance: 1.06, name: 'portal', destX: 4440, destDistance: 1.08 },
      { x: 4541, y: 2000, w: 100, h: 200, distance: 1.08, name: 'portal', destX: 4450, destDistance: 1.1 },

      { x: 4299, y: 2000, w: 101, h: 200, distance: 1.02, name: 'portal', destX: 4400, destDistance: 1 },
      { x: 4309, y: 2000, w: 101, h: 200, distance: 1.04, name: 'portal', destX: 4410, destDistance: 1.02 },
      { x: 4319, y: 2000, w: 101, h: 200, distance: 1.06, name: 'portal', destX: 4420, destDistance: 1.04 },
      { x: 4329, y: 2000, w: 101, h: 200, distance: 1.08, name: 'portal', destX: 4430, destDistance: 1.06 },
      { x: 4339, y: 2000, w: 101, h: 200, distance: 1.1, name: 'portal', destX: 4440, destDistance: 1.08 },

      { x: 4551, y: 2000, w: 100, h: 200, distance: 1.1, name: 'portal', destX: 4460, destDistance: 1.12 },
      { x: 4561, y: 2000, w: 100, h: 200, distance: 1.12, name: 'portal', destX: 4470, destDistance: 1.14 },
      { x: 4571, y: 2000, w: 100, h: 200, distance: 1.14, name: 'portal', destX: 4480, destDistance: 1.16 },
      { x: 4581, y: 2000, w: 100, h: 200, distance: 1.16, name: 'portal', destX: 4490, destDistance: 1.18 },
      { x: 4591, y: 2000, w: 100, h: 200, distance: 1.18, name: 'portal', destX: 4500, destDistance: 1.2 },

      { x: 4349, y: 2000, w: 101, h: 200, distance: 1.12, name: 'portal', destX: 4450, destDistance: 1.1 },
      { x: 4359, y: 2000, w: 101, h: 200, distance: 1.14, name: 'portal', destX: 4460, destDistance: 1.12 },
      { x: 4369, y: 2000, w: 101, h: 200, distance: 1.16, name: 'portal', destX: 4470, destDistance: 1.14 },
      { x: 4379, y: 2000, w: 101, h: 200, distance: 1.18, name: 'portal', destX: 4480, destDistance: 1.16 },
      { x: 4389, y: 2000, w: 101, h: 200, distance: 1.2, name: 'portal', destX: 4490, destDistance: 1.18 }
    );

    level1.gems.push(
      { x: 400, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 7 },
      { x: 600, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 1 },
      { x: 800, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 3 },
      { x: 1000, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 5 },
      { x: 1200, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 7 },
      { x: 1400, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 1 },
      { x: 1600, y: 2000, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 4 },
      { x: 1800, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 1900, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 2100, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 6 },
      { x: 2200, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 6 },

      { x: 2550, y: 2000, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 1 },
      { x: 2700, y: 1900, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 1 },
      { x: 2850, y: 2000, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 1 },
      { x: 3000, y: 1900, w: 100, h: 100, distance: 1, name: 'CollectableA', animationCounter: 1 },
      { x: 3150, y: 2000, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 1 },
      { x: 3300, y: 1900, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 1 },
      { x: 3450, y: 2000, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 1 },
      { x: 3800, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 3900, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 4000, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 4100, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 4200, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 4300, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 4400, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 4750, y: 2000, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 5050, y: 2000, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 5300, y: 2000, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 5300, y: 2100, w: 100, h: 100, distance: 1.2, name: 'CollectableB', animationCounter: 1 },
      { x: 5500, y: 1900, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 5400, y: 1750, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 5650, y: 1600, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 5750, y: 1600, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 5850, y: 1550, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 6050, y: 1600, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 6150, y: 1550, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 6850, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 6850, y: 2030, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 7200, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 7350, y: 2050, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 7500, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 7600, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 7700, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 7800, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 7950, y: 2050, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 8100, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 8200, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 8250, y: 2000, w: 100, h: 100, distance: 1.2, name: 'CollectableC', animationCounter: 1 },
      { x: 8300, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 8400, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 8550, y: 2050, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 8700, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 8800, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 }
    );

    level1.jumpzones.push(
      {
        area: {
          x: 5800,
          y: 1900,
          w: 100,
          h: 100,
          distance: 1.2,
          name: 'jumpzone',
        },
        availability: AvailabilityTypeEnum.AVAILABLE,
        animationCounter: 1,
        drawables: [
          ...this.generateJumpzoneDrawables({
            x: 5800,
            y: 1900,
            w: 100,
            h: 100,
            distance: 1.2,
            name: 'jumpzonesingleavailable',
          }),
        ],
      },
      {
        area: {
          x: 6000,
          y: 1850,
          w: 100,
          h: 100,
          distance: 1.2,
          name: 'jumpzone',
        },
        availability: AvailabilityTypeEnum.AVAILABLE,
        animationCounter: 1,
        drawables: [
          ...this.generateJumpzoneDrawables({
            x: 6000,
            y: 1850,
            w: 100,
            h: 100,
            distance: 1.2,
            name: 'jumpzonesingleavailable',
          }),
        ],
      },
      {
        area: {
          x: 6200,
          y: 1800,
          w: 100,
          h: 100,
          distance: 1.2,
          name: 'jumpzone',
        },
        availability: AvailabilityTypeEnum.AVAILABLE,
        animationCounter: 1,
        drawables: [
          ...this.generateJumpzoneDrawables({
            x: 6200,
            y: 1800,
            w: 100,
            h: 100,
            distance: 1.2,
            name: 'jumpzonesingleavailable',
          }),
        ],
      }
    );

    level1.enemies.push(
      {
        x: 2000,
        y: 2000,
        w: 100,
        h: 100,
        spawnx1: 1200,
        spawnx2: 3600,
        distance: 1,
        name: 'pig',
        dir: DirTypeEnum.RIGHT,
        animationCounter: 1,
        animationCounterDelay: 0,
        hitbox: {
          x: 2010,
          y: 2040,
          w: 80,
          h: 50,
          distance: 1,
          name: 'hitbox',
        },
        isFlying: false,
        horizontalVelocity: 0,
        verticalVelocity: 0,
        mSpeed: 3,
        mFallSpeed: 10,
        deathVelocityX: 18,
        deathVelocityY: -10,
        groundOffset: 5,
        hardWalls: [
          { x: 1500, y: 2200, w: 100, h: 200, distance: 1, name: 'wall' },
          { x: 1700, y: 2200, w: 100, h: 200, distance: 1, name: 'wall' },
        ],
        softWalls: [
          { x: 1600, y: 2000, w: 100, h: 200, distance: 1, name: 'wall' },
          { x: 2400, y: 2000, w: 100, h: 200, distance: 1, name: 'wall' },
        ],
        floors: [
          { x: 1200, y: 2200, w: 300, h: 100, distance: 1, name: 'floor' },
          { x: 1700, y: 2200, w: 700, h: 100, distance: 1, name: 'floor' },
        ],
        action: ActionTypeEnum.NONE,

        xo: 2000,
        yo: 2000,
        diro: DirTypeEnum.RIGHT,
        anco: 1,
        ancdo: 0,
        hitboxxo: 2010,
        hitboxyo: 2040,
        hvo: 0,
        vvo: 0,
        mso: 3,
        swo: [
          { x: 1600, y: 2000, w: 100, h: 200, distance: 1, name: 'wall' },
          { x: 2400, y: 2000, w: 100, h: 200, distance: 1, name: 'wall' },
        ],
        actiono: ActionTypeEnum.NONE,
      },
      {
        x: 4800,
        y: 2000,
        w: 100,
        h: 100,
        spawnx1: 3000,
        spawnx2: 6800,
        distance: 1.2,
        name: 'owl',
        dir: DirTypeEnum.LEFT,
        animationCounter: 1,
        animationCounterDelay: 0,
        hitbox: {
          x: 4810,
          y: 2005,
          w: 80,
          h: 30,
          distance: 1,
          name: 'hitbox',
        },
        isFlying: true,
        horizontalVelocity: 0,
        verticalVelocity: 0,
        mSpeed: 2,
        mFallSpeed: 3,
        deathVelocityX: 20,
        deathVelocityY: -15,
        groundOffset: 65,
        hardWalls: [],
        softWalls: [
          { x: 4500, y: 2000, w: 100, h: 200, distance: 1.2, name: 'wall' },
          { x: 5200, y: 2000, w: 100, h: 200, distance: 1.2, name: 'wall' },
        ],
        floors: [{ x: 4500, y: 2200, w: 700, h: 100, distance: 1.2, name: 'floor' }],
        action: ActionTypeEnum.NONE,

        xo: 4800,
        yo: 2000,
        diro: DirTypeEnum.LEFT,
        anco: 1,
        ancdo: 0,
        hitboxxo: 4810,
        hitboxyo: 2005,
        hvo: 0,
        vvo: 0,
        mso: 2,
        swo: [
          { x: 4500, y: 2000, w: 100, h: 200, distance: 1.2, name: 'wall' },
          { x: 5200, y: 2000, w: 100, h: 200, distance: 1.2, name: 'wall' },
        ],
        actiono: ActionTypeEnum.NONE,
      },
      {
        x: 5300,
        y: 2200,
        w: 100,
        h: 100,
        spawnx1: 4000,
        spawnx2: 6800,
        distance: 1.2,
        name: 'owl',
        dir: DirTypeEnum.RIGHT,
        animationCounter: 1,
        animationCounterDelay: 0,
        hitbox: {
          x: 5310,
          y: 2205,
          w: 80,
          h: 30,
          distance: 1,
          name: 'hitbox',
        },
        isFlying: true,
        horizontalVelocity: 0,
        verticalVelocity: 0,
        mSpeed: 0,
        mFallSpeed: 3,
        deathVelocityX: 20,
        deathVelocityY: -15,
        groundOffset: 65,
        hardWalls: [],
        softWalls: [],
        floors: [],
        action: ActionTypeEnum.NONE,

        xo: 5300,
        yo: 2200,
        diro: DirTypeEnum.RIGHT,
        anco: 1,
        ancdo: 0,
        hitboxxo: 5310,
        hitboxyo: 2205,
        hvo: 0,
        vvo: 0,
        mso: 0,
        swo: [],
        actiono: ActionTypeEnum.NONE,
      },
      {
        x: 5400,
        y: 2150,
        w: 100,
        h: 100,
        spawnx1: 4000,
        spawnx2: 6800,
        distance: 1.2,
        name: 'owl',
        dir: DirTypeEnum.RIGHT,
        animationCounter: 1,
        animationCounterDelay: 0,
        hitbox: {
          x: 5410,
          y: 2155,
          w: 80,
          h: 30,
          distance: 1,
          name: 'hitbox',
        },
        isFlying: true,
        horizontalVelocity: 0,
        verticalVelocity: 0,
        mSpeed: 0,
        mFallSpeed: 3,
        deathVelocityX: 20,
        deathVelocityY: -15,
        groundOffset: 65,
        hardWalls: [],
        softWalls: [],
        floors: [],
        action: ActionTypeEnum.NONE,

        xo: 5400,
        yo: 2150,
        diro: DirTypeEnum.RIGHT,
        anco: 1,
        ancdo: 0,
        hitboxxo: 5410,
        hitboxyo: 2155,
        hvo: 0,
        vvo: 0,
        mso: 0,
        swo: [],
        actiono: ActionTypeEnum.NONE,
      },
      {
        x: 5650,
        y: 1875,
        w: 100,
        h: 100,
        spawnx1: 4000,
        spawnx2: 6800,
        distance: 1.2,
        name: 'owl',
        dir: DirTypeEnum.LEFT,
        animationCounter: 1,
        animationCounterDelay: 0,
        hitbox: {
          x: 5660,
          y: 1880,
          w: 80,
          h: 30,
          distance: 1,
          name: 'hitbox',
        },
        isFlying: true,
        horizontalVelocity: 0,
        verticalVelocity: 0,
        mSpeed: 0,
        mFallSpeed: 3,
        deathVelocityX: 20,
        deathVelocityY: -15,
        groundOffset: 65,
        hardWalls: [],
        softWalls: [],
        floors: [],
        action: ActionTypeEnum.NONE,

        xo: 5650,
        yo: 1875,
        diro: DirTypeEnum.LEFT,
        anco: 1,
        ancdo: 0,
        hitboxxo: 5660,
        hitboxyo: 1880,
        hvo: 0,
        vvo: 0,
        mso: 0,
        swo: [],
        actiono: ActionTypeEnum.NONE,
      },

      {
        x: 6200,
        y: 1550,
        w: 100,
        h: 100,
        spawnx1: 4800,
        spawnx2: 7500,
        distance: 1.2,
        name: 'owl',
        dir: DirTypeEnum.LEFT,
        animationCounter: 1,
        animationCounterDelay: 0,
        hitbox: {
          x: 6210,
          y: 1555,
          w: 80,
          h: 30,
          distance: 1,
          name: 'hitbox',
        },
        isFlying: true,
        horizontalVelocity: 0,
        verticalVelocity: 0,
        mSpeed: 0,
        mFallSpeed: 3,
        deathVelocityX: 20,
        deathVelocityY: -15,
        groundOffset: 65,
        hardWalls: [],
        softWalls: [],
        floors: [],
        action: ActionTypeEnum.NONE,

        xo: 6200,
        yo: 1550,
        diro: DirTypeEnum.LEFT,
        anco: 1,
        ancdo: 0,
        hitboxxo: 6210,
        hitboxyo: 1555,
        hvo: 0,
        vvo: 0,
        mso: 0,
        swo: [],
        actiono: ActionTypeEnum.NONE,
      },
      {
        x: 7600,
        y: 2000,
        w: 100,
        h: 100,
        spawnx1: 6000,
        spawnx2: 10000,
        distance: 1.2,
        name: 'pig',
        dir: DirTypeEnum.RIGHT,
        animationCounter: 1,
        animationCounterDelay: 0,
        hitbox: {
          x: 7610,
          y: 2040,
          w: 80,
          h: 50,
          distance: 1,
          name: 'hitbox',
        },
        isFlying: false,
        horizontalVelocity: 0,
        verticalVelocity: 0,
        mSpeed: 3,
        mFallSpeed: 10,
        deathVelocityX: 18,
        deathVelocityY: -10,
        groundOffset: 5,
        hardWalls: [
          { x: 7300, y: 2300, w: 100, h: 200, distance: 1.2, name: 'wall' },
          { x: 8100, y: 2300, w: 100, h: 200, distance: 1.2, name: 'wall' },
        ],
        softWalls: [
          { x: 7400, y: 2100, w: 100, h: 200, distance: 1.2, name: 'wall' },
          { x: 7900, y: 2100, w: 100, h: 200, distance: 1.2, name: 'wall' },
        ],
        floors: [
          { x: 7500, y: 2300, w: 400, h: 100, distance: 1.2, name: 'floor' },
          { x: 6750, y: 2300, w: 650, h: 100, distance: 1.2, name: 'floor' },
        ],
        action: ActionTypeEnum.NONE,

        xo: 7600,
        yo: 2000,
        diro: DirTypeEnum.RIGHT,
        anco: 1,
        ancdo: 0,
        hitboxxo: 7610,
        hitboxyo: 2040,
        hvo: 0,
        vvo: 0,
        mso: 3,
        swo: [
          { x: 7400, y: 2100, w: 100, h: 200, distance: 1.2, name: 'wall' },
          { x: 7900, y: 2100, w: 100, h: 200, distance: 1.2, name: 'wall' },
        ],
        actiono: ActionTypeEnum.NONE,
      },
      {
        x: 8250,
        y: 2160,
        w: 100,
        h: 100,
        spawnx1: 7000,
        spawnx2: 9500,
        distance: 1.2,
        name: 'owl',
        dir: DirTypeEnum.LEFT,
        animationCounter: 1,
        animationCounterDelay: 0,
        hitbox: {
          x: 8260,
          y: 2165,
          w: 80,
          h: 30,
          distance: 1,
          name: 'hitbox',
        },
        isFlying: true,
        horizontalVelocity: 0,
        verticalVelocity: 0,
        mSpeed: 0,
        mFallSpeed: 3,
        deathVelocityX: 20,
        deathVelocityY: -15,
        groundOffset: 65,
        hardWalls: [],
        softWalls: [],
        floors: [],
        action: ActionTypeEnum.NONE,

        xo: 8250,
        yo: 2160,
        diro: DirTypeEnum.LEFT,
        anco: 1,
        ancdo: 0,
        hitboxxo: 8260,
        hitboxyo: 2165,
        hvo: 0,
        vvo: 0,
        mso: 0,
        swo: [],
        actiono: ActionTypeEnum.NONE,
      },
      {
        x: 8700,
        y: 2300,
        w: 100,
        h: 100,
        spawnx1: 7000,
        spawnx2: 9500,
        distance: 1.2,
        name: 'owl',
        dir: DirTypeEnum.LEFT,
        animationCounter: 1,
        animationCounterDelay: 0,
        hitbox: {
          x: 8710,
          y: 2305,
          w: 80,
          h: 30,
          distance: 1,
          name: 'hitbox',
        },
        isFlying: true,
        horizontalVelocity: 0,
        verticalVelocity: 0,
        mSpeed: 0,
        mFallSpeed: 3,
        deathVelocityX: 20,
        deathVelocityY: -15,
        groundOffset: 65,
        hardWalls: [],
        softWalls: [],
        floors: [],
        action: ActionTypeEnum.NONE,

        xo: 8700,
        yo: 2300,
        diro: DirTypeEnum.LEFT,
        anco: 1,
        ancdo: 0,
        hitboxxo: 8710,
        hitboxyo: 2305,
        hvo: 0,
        vvo: 0,
        mso: 0,
        swo: [],
        actiono: ActionTypeEnum.NONE,
      }
    );

    level1.skyLineLayer.push(
      { x: 800, y: 0, w: 300, h: 200, distance: 8, name: 'cloud2', resizeWhenDistant: false },
      { name: 'cloud3', x: 8000, y: -200, w: 300, h: 200, distance: 8, resizeWhenDistant: false },
      { name: 'cloud1', x: 1500, y: 1500, w: 100, h: 100, distance: 4, resizeWhenDistant: false },
      { name: 'cloud1', x: 200, y: 1300, w: 100, h: 100, distance: 4, resizeWhenDistant: false },
      { name: 'cloud1', x: -300, y: 2200, w: 100, h: 100, distance: 4, resizeWhenDistant: false },
      { name: 'cloud1', x: 3600, y: 1600, w: 100, h: 100, distance: 4, resizeWhenDistant: false },
      { name: 'tree1', x: -400, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: -200, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: -0, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 200, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 400, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 600, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 800, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 1000, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 1200, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 1400, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 2400, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 5125, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 5350, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 5575, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 5800, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 6025, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 6250, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 6475, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: 6700, y: 2200, w: 100, h: 200, distance: 2.5, resizeWhenDistant: false },
      { name: 'tree1', x: -300, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: -100, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 100, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 300, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 500, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 700, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 900, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 1100, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 5000, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 5200, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 5400, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 5600, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 5800, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 6000, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'tree1', x: 6200, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false },
      { name: 'ground-z-filler-small', x: 4500, y: 2299, w: 100, h: 100, distance: 1.2 },
      { name: 'ground-middle-full', x: 4600, y: 2299, w: 500, h: 100, distance: 1.2 },
      { name: 'ground-middle-right', x: 5099, y: 2299, w: 100, h: 100, distance: 1.2 },
      { name: 'ground-z-filler', x: 4490, y: 2299, w: 100, h: 100, distance: 1.18 },
      { name: 'ground-z-filler', x: 4480, y: 2299, w: 100, h: 100, distance: 1.16 },
      { name: 'ground-z-filler', x: 4470, y: 2299, w: 100, h: 100, distance: 1.14 },
      { name: 'ground-z-filler', x: 4460, y: 2299, w: 100, h: 100, distance: 1.12 },
      { name: 'ground-z-filler', x: 4450, y: 2299, w: 100, h: 100, distance: 1.1 },
      { name: 'ground-z-filler', x: 4440, y: 2299, w: 100, h: 100, distance: 1.08 },
      { name: 'ground-z-filler', x: 4430, y: 2299, w: 100, h: 100, distance: 1.06 },
      { name: 'ground-z-filler', x: 4420, y: 2299, w: 100, h: 100, distance: 1.04 },
      { name: 'ground-z-filler', x: 4410, y: 2299, w: 100, h: 100, distance: 1.02 },

      { x: 6750, y: 1800, w: 100, h: 300, distance: 1.2, name: 'ground-middle-small' },
      { x: 6750, y: 2100, w: 100, h: 100, distance: 1.2, name: 'ground-bottom-small' },
      { x: 6950, y: 1300, w: 100, h: 800, distance: 1.2, name: 'ground-middle-small' },
      { x: 6950, y: 2100, w: 100, h: 100, distance: 1.2, name: 'ground-bottom-small' }
    );
    level1.centerLayer.push(
      ...level1.platforms,
      ...([].concat(...level1.jumpzones.map((j) => j.drawables)) as IDrawable[]),
      ...level1.gems,
      ...level1.enemies,
      level1.player,
      level1.finish
    );
    level1.frontLayer.push(
      { name: 'tree1', x: 4700, y: 1950, w: 220, h: 440, distance: 0.8, resizeWhenDistant: false },
      { name: 'tree1', x: 5000, y: 1950, w: 220, h: 440, distance: 0.8, resizeWhenDistant: false }
    );
    return level1;
  };

  public getLevel2 = (): ILevel => {
    const level2: ILevel = {
      code: '1',
      width: 10500,
      height: 2400,
      player: {
        x: 300,
        y: 1800,
        w: 100,
        h: 100,
        verticalVelocity: 10,
        animationCounter: 1,
        distance: 1,
        mSpeed: 10,
        dir: DirTypeEnum.RIGHT,
        dmgDir: DirTypeEnum.LEFT,
        action: ActionTypeEnum.NONE,
        verticalAction: ActionTypeEnum.NONE,
        blockingAction: ActionTypeEnum.NONE,
        name: 'player',
        gems: [],
        bigGems: [],
        hidden: false,
        health: 4,
      },
      camera: {
        x: 100,
        y: 100,
        w: 800,
        h: 500,
      },
      platforms: [],
      walls: [],
      portals: [],
      gems: [],
      jumpzones: [],
      enemies: [],
      skyLineLayer: [],
      backLayer: [],
      centerLayer: [],
      frontLayer: [],
      gravity: 2,
      jumpPower: -25,
      maxFallSpeed: 15,
      finish: { x: 9000, y: 2200, w: 100, h: 100, distance: 1.2, name: 'Finish' },
    };

    level2.centerLayer.push(...level2.platforms);
    level2.centerLayer.push(level2.player);
    return level2;
  };

  private generateJumpzoneDrawables = (block: IBlock): IDrawable[] => {
    const drawables: IDrawable[] = [];
    for (let i = block.x; i < block.x + block.w; i += 100) {
      for (let j = block.y; j < block.y + block.h; j += 100) {
        drawables.push({
          x: i,
          y: j,
          w: 100,
          h: 100,
          distance: block.distance,
          name: block.name,
          animationCounter: 1,
        });
      }
    }
    return drawables;
  };
}
