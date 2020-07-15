import { IPlayer } from './player.interface';
import { ICamera } from './camera.interface';
import { IDrawable } from './drawable.interface';
import { IBlock } from './block.interface';

export interface ILevel {
  code: string;
  width: number;
  height: number;
  player: IPlayer;
  camera: ICamera;
  platforms: IBlock[];
  walls: IBlock[];
  skyLineLayer: IDrawable[];
  backLayer: IDrawable[];
  centerLayer: IDrawable[];
  frontLayer: IDrawable[];
  gravity: number;
  jumpPower: number;
  maxFallSpeed: number;
}
