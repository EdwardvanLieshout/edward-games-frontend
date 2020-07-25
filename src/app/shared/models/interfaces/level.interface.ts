import { IPlayer } from './player.interface';
import { ICamera } from './camera.interface';
import { IDrawable } from './drawable.interface';
import { IBlock } from './block.interface';
import { IPortal } from './portal.interface';
import { IJumpzone } from './jumpzone.interface';
import { IEnemy } from './enemy.interface';

export interface ILevel {
  code: string;
  width: number;
  height: number;
  player: IPlayer;
  camera: ICamera;
  platforms: IBlock[];
  walls: IBlock[];
  portals: IPortal[];
  gems: IDrawable[];
  jumpzones: IJumpzone[];
  enemies: IEnemy[];
  skyLineLayer: IDrawable[];
  backLayer: IDrawable[];
  centerLayer: IDrawable[];
  frontLayer: IDrawable[];
  gravity: number;
  jumpPower: number;
  maxFallSpeed: number;
  finish: IBlock;
}
