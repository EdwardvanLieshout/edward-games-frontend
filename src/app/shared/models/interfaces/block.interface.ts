import { IDrawable } from './drawable.interface';

export interface IBlock {
  x: number;
  y: number;
  w: number;
  h: number;
  distance: number;
  name: string;
  uiDrawable?: IDrawable;
  uiMaxAnim?: number;
}
