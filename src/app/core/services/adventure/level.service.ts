import { Injectable } from '@angular/core';
import { DirTypeEnum } from '../../../shared/models/enums/direction.enum';
import { ActionTypeEnum } from '../../../shared/models/enums/action.enum';
import { ILevel } from '../../../shared/models/interfaces/level.interface';
import { IPlatform } from '../../../shared/models/interfaces/platform.interface';

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
      skyLineLayer: [],
      backLayer: [],
      centerLayer: [],
      frontLayer: [],
      gravity: 2,
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
          w: 800,
          h: 100,
          distance: 1,
          name: 'ground-upper-full',
        },
        {
          x: 1000,
          y: 2200,
          w: 100,
          h: 100,
          distance: 1,
          name: 'ground-upper-right',
        },
      ]
    );
    level1.centerLayer.push(...level1.platforms);
    level1.centerLayer.push(level1.player);
    return level1;
  };
}
