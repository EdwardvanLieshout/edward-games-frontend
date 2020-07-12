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
        name: 'player',
      },
      camera: {
        x: 100,
        y: 100,
        w: 800,
        h: 500,
      },
      skyLineLayer: [],
      backLayer: [],
      centerLayer: [],
      frontLayer: [],
      gravity: 2,
      maxFallSpeed: 10,
    };
    level1.centerLayer.push(level1.player);
    return level1;
  };
}
