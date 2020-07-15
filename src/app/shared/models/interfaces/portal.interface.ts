import { IBlock } from './block.interface';

export interface IPortal extends IBlock {
  x: number;
  y: number;
  w: number;
  h: number;
  distance: number;
  name: string;
  destX?: number;
  destY?: number;
  destDistance?: number;
}
