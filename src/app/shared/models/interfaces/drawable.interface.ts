import { DirTypeEnum } from '../enums/direction.enum';
import { ActionTypeEnum } from '../enums/action.enum';

export interface IDrawable {
  id?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  distance: number;
  name: string;
  animationCounter?: number;
  maxFrame?: number;
  animationCounterDelay?: number;
  animationSleep?: number;
  dir?: DirTypeEnum;
  action?: ActionTypeEnum;
  verticalAction?: ActionTypeEnum;
  blockingAction?: ActionTypeEnum;
  resizeWhenDistant?: boolean;
  hidden?: boolean;
}
