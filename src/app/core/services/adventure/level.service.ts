import { Injectable } from '@angular/core';
import { DirTypeEnum } from '../../../shared/models/enums/direction.enum';
import { ActionTypeEnum } from '../../../shared/models/enums/action.enum';
import { ILevel } from '../../../shared/models/interfaces/level.interface';

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
      },
      camera: {
        x: 100,
        y: 100,
        w: 800,
        h: 500,
      },
      platforms: [],
      walls: [],
      skyLineLayer: [],
      backLayer: [],
      centerLayer: [],
      frontLayer: [],
      gravity: 2,
      jumpPower: -25,
      maxFallSpeed: 15,
    };

    level1.platforms.push(
      ...[
        {
          x: 100,
          y: 0,
          w: 100,
          h: 2200,
          distance: 1,
          name: 'ground-middle-right',
        },
        {
          x: 100,
          y: 2200,
          w: 100,
          h: 100,
          distance: 1,
          name: 'ground-middle-full-corner-r',
        },
        {
          x: 200,
          y: 2200,
          w: 1300,
          h: 100,
          distance: 1,
          name: 'ground-upper-full',
        },
        {
          x: 1500,
          y: 2200,
          w: 100,
          h: 100,
          distance: 1,
          name: 'ground-upper-right',
        },
        {
          x: 1700,
          y: 2200,
          w: 100,
          h: 100,
          distance: 1,
          name: 'ground-upper-left',
        },
        {
          x: 1800,
          y: 2200,
          w: 500,
          h: 100,
          distance: 1,
          name: 'ground-upper-full',
        },
        {
          x: 2300,
          y: 2200,
          w: 100,
          h: 100,
          distance: 1,
          name: 'ground-upper-right',
        },
      ]
    );

    level1.walls.push(
      ...[
        { x: 100, y: 0, w: 100, h: 2200, distance: 1, name: 'wall' },
        { x: 1500, y: 2200, w: 100, h: 100, distance: 1, name: 'wall' },
        { x: 1700, y: 2200, w: 100, h: 100, distance: 1, name: 'wall' },
        { x: 2300, y: 2200, w: 100, h: 100, distance: 1, name: 'wall' },
      ]
    );
    level1.skyLineLayer.push(
      {
        x: 800,
        y: 0,
        w: 300,
        h: 200,
        distance: 8,
        name: 'cloud2',
        resizeWhenDistant: false,
      },
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
      { name: 'tree1', x: 6200, y: 2150, w: 110, h: 220, distance: 2, resizeWhenDistant: false }
    );
    level1.centerLayer.push(...level1.platforms);
    level1.centerLayer.push(level1.player);
    return level1;
  };
}
