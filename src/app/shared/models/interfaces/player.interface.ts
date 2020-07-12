import { DirTypeEnum } from '../enums/direction.enum';
import { ActionTypeEnum } from '../enums/action.enum';

export interface IPlayer {
  x: number;
  y: number;
  w: number;
  h: number;
  verticalVelocity: number;
  distance: number;
  animationCounter: number;
  mSpeed: number;
  dir: DirTypeEnum;
  action: ActionTypeEnum;
  verticalAction: ActionTypeEnum;
  name: string;
}