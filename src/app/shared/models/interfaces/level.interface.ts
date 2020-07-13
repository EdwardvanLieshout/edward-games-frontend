import { IPlayer } from './player.interface';
import { ICamera } from './camera.interface';
import { IDrawable } from './drawable.interface';
import { IPlatform } from './platform.interface';

export interface ILevel {
  code: string;
  width: number;
  height: number;
  player: IPlayer;
  camera: ICamera;
  platforms: IPlatform[];
  skyLineLayer: IDrawable[];
  backLayer: IDrawable[];
  centerLayer: IDrawable[];
  frontLayer: IDrawable[];
  gravity: number;
  maxFallSpeed: number;
}
