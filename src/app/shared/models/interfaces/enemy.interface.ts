import { IDrawable } from './drawable.interface';
import { IBlock } from './block.interface';
import { DirTypeEnum } from '../enums/direction.enum';
import { ActionTypeEnum } from '../enums/action.enum';

export interface IEnemy {
  id?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  distance: number;
  dir: DirTypeEnum;
  animationCounter?: number;
  animationCounterDelay?: number;
  animationFrames?: number;
  hitbox: IBlock;
  isFlying: boolean;
  isInvincible?: boolean;
  name: string;
  horizontalVelocity: number;
  verticalVelocity: number;
  mSpeed: number;
  mFallSpeed: number;
  groundOffset: number;
  deathVelocityX: number;
  deathVelocityY: number;
  hardWalls: IBlock[];
  softWalls: IBlock[];
  floors: IBlock[];
  action: ActionTypeEnum;

  spawnx1: number;
  spawnx2: number;

  xo: number;
  yo: number;
  diro: DirTypeEnum;
  anco?: number;
  ancdo?: number;
  hitboxxo: number;
  hitboxyo: number;
  hvo: number;
  vvo: number;
  mso: number;
  swo: IBlock[];
  actiono: ActionTypeEnum;

  pushVelocityX: number;
}
