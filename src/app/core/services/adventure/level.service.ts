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
        action: ActionTypeEnum.NONE,
        verticalAction: ActionTypeEnum.NONE,
        blockingAction: ActionTypeEnum.NONE,
        name: 'player',
        gems: [],
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
      skyLineLayer: [],
      backLayer: [],
      centerLayer: [],
      frontLayer: [],
      gravity: 2,
      jumpPower: -25,
      maxFallSpeed: 15,
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
      { x: 5100, y: 2200, w: 100, h: 100, distance: 1.2, name: 'ground-upper-right' },
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
      { x: 3900, y: 2200, w: 500, h: 100, distance: 1, name: 'ground-upper-full' }
    );

    level1.walls.push(
      { x: 100, y: 0, w: 100, h: 2200, distance: 1, name: 'wall' },
      { x: 1500, y: 2200, w: 100, h: 100, distance: 1, name: 'wall' },
      { x: 1700, y: 2200, w: 100, h: 100, distance: 1, name: 'wall' },
      { x: 2300, y: 2200, w: 100, h: 100, distance: 1, name: 'wall' },
      { x: 3800, y: 2200, w: 100, h: 200, distance: 1, name: 'wall' },
      { x: 5100, y: 2200, w: 100, h: 200, distance: 1.2, name: 'wall' }
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
      { x: 600, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 1 },
      { x: 800, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 3 },
      { x: 1000, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 5 },
      { x: 1200, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 7 },
      { x: 1600, y: 2000, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 4 },
      { x: 1800, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 1900, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 2100, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 6 },
      { x: 2200, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 6 },

      { x: 2700, y: 1900, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 1 },
      { x: 3300, y: 1900, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 1 },
      { x: 4100, y: 2100, w: 100, h: 100, distance: 1, name: 'Col', animationCounter: 2 },
      { x: 4750, y: 2000, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 },
      { x: 5050, y: 2000, w: 100, h: 100, distance: 1.2, name: 'Col', animationCounter: 7 }
    );

    level1.jumpzones.push({
      area: {
        x: 1000,
        y: 1800,
        w: 300,
        h: 200,
        distance: 1,
        name: 'jumpzone',
      },
      availability: AvailabilityTypeEnum.AVAILABLE,
      animationCounter: 1,
      drawables: [
        ...this.generateJumpzoneDrawables({
          x: 1000,
          y: 1800,
          w: 300,
          h: 200,
          distance: 1,
          name: 'jumpzone',
        }),
      ],
    });

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
      { name: 'ground-middle-right', x: 5100, y: 2299, w: 100, h: 100, distance: 1.2 },
      { name: 'ground-z-filler', x: 4490, y: 2299, w: 100, h: 100, distance: 1.18 },
      { name: 'ground-z-filler', x: 4480, y: 2299, w: 100, h: 100, distance: 1.16 },
      { name: 'ground-z-filler', x: 4470, y: 2299, w: 100, h: 100, distance: 1.14 },
      { name: 'ground-z-filler', x: 4460, y: 2299, w: 100, h: 100, distance: 1.12 },
      { name: 'ground-z-filler', x: 4450, y: 2299, w: 100, h: 100, distance: 1.1 },
      { name: 'ground-z-filler', x: 4440, y: 2299, w: 100, h: 100, distance: 1.08 },
      { name: 'ground-z-filler', x: 4430, y: 2299, w: 100, h: 100, distance: 1.06 },
      { name: 'ground-z-filler', x: 4420, y: 2299, w: 100, h: 100, distance: 1.04 },
      { name: 'ground-z-filler', x: 4410, y: 2299, w: 100, h: 100, distance: 1.02 }
    );
    level1.centerLayer.push(
      ...level1.platforms,
      ...([].concat(...level1.jumpzones.map((j) => j.drawables)) as IDrawable[]),
      ...level1.gems,
      level1.player
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
        action: ActionTypeEnum.NONE,
        verticalAction: ActionTypeEnum.NONE,
        blockingAction: ActionTypeEnum.NONE,
        name: 'player',
        gems: [],
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
      skyLineLayer: [],
      backLayer: [],
      centerLayer: [],
      frontLayer: [],
      gravity: 2,
      jumpPower: -25,
      maxFallSpeed: 15,
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
          name: 'jumpzoneavailable',
          animationCounter: 1,
        });
      }
    }
    return drawables;
  };
}
