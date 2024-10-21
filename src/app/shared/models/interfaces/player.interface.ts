import { DirTypeEnum } from '../enums/direction.enum';
import { ActionTypeEnum } from '../enums/action.enum';
import { IBlock } from './block.interface';
import { IDrawable } from './drawable.interface';

export interface IPlayer {
  id?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  verticalVelocity: number;
  distance: number;
  animationCounter: number;
  mSpeed: number;
  dir: DirTypeEnum;
  dmgDir: DirTypeEnum;
  action: ActionTypeEnum;
  verticalAction: ActionTypeEnum;
  blockingAction: ActionTypeEnum;
  name: string;
  gems: IDrawable[];
  bigGems: IDrawable[];
  hidden: boolean;
  health: number;
}
