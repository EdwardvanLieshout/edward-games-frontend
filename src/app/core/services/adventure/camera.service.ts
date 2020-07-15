import { Injectable } from '@angular/core';
import { ICamera } from '../../../shared/models/interfaces/camera.interface';
import { ILevel } from '../../../shared/models/interfaces/level.interface';
import { IDrawCommand } from '../../../shared/models/interfaces/drawcommand.interface';
import { IDrawable } from '../../../shared/models/interfaces/drawable.interface';
import { ActionTypeEnum } from '../../../shared/models/enums/action.enum';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  public reposition = (level: ILevel): void => {
    level.camera.x = level.player.x - (level.camera.w / 2 - level.player.w / 2);
    level.camera.y = level.player.y - (level.camera.h / 2 - level.player.h / 2);
    if (level.camera.x < 100) {
      level.camera.x = 100;
    }
    if (level.camera.x > level.width - level.camera.w - 100) {
      level.camera.x = level.width - level.camera.w - 100;
    }
    if (level.camera.y < 100) {
      level.camera.y = 100;
    }
    if (level.camera.y > level.height - level.camera.h - 100) {
      level.camera.y = level.height - level.camera.h - 100;
    }
  };

  // tslint:disable-next-line:no-any
  public getDrawCommands = (level: ILevel, sprites: any): IDrawCommand[] => {
    this.reposition(level);
    const drawCommands: IDrawCommand[] = [];
    drawCommands.push({ x: 0, y: 0, w: level.camera.w, h: level.camera.h, img: sprites.bg });
    drawCommands.push({
      x: 0,
      y: 0,
      w: level.camera.w,
      h: level.camera.h,
      alpha: level.camera.x / (level.width - level.camera.w),
      img: sprites.bgfade,
    });
    for (const drawable of level.skyLineLayer) {
      if (this.isVisible(level.camera, drawable)) {
        drawCommands.push(this.createDrawCommand(level.camera, drawable, sprites));
      }
    }
    for (const drawable of level.backLayer) {
      if (this.isVisible(level.camera, drawable)) {
        drawCommands.push(this.createDrawCommand(level.camera, drawable, sprites));
      }
    }
    for (const drawable of level.centerLayer) {
      if (this.isVisible(level.camera, drawable)) {
        drawCommands.push(this.createDrawCommand(level.camera, drawable, sprites));
      }
    }
    for (const drawable of level.frontLayer) {
      if (this.isVisible(level.camera, drawable)) {
        drawCommands.push(this.createDrawCommand(level.camera, drawable, sprites));
      }
    }
    return drawCommands;
  };

  // tslint:disable-next-line:no-any
  private createDrawCommand = (camera: ICamera, drawable: IDrawable, sprites: any): IDrawCommand => {
    const dir = drawable.dir ? drawable.dir : '';
    const blockingAction = drawable.blockingAction ? drawable.blockingAction : '';
    const verticalAction =
      drawable.verticalAction && (blockingAction === undefined || blockingAction === '') ? drawable.verticalAction : '';
    const action =
      drawable.action &&
      (blockingAction === undefined || blockingAction === '') &&
      (verticalAction === undefined || verticalAction === '')
        ? drawable.action
        : '';
    const animation = drawable.animationCounter ? drawable.animationCounter : '';

    return {
      x: this.offsetX(camera, drawable.x, drawable.distance),
      y: this.offsetY(camera, drawable.y, drawable.distance),
      w:
        drawable.w /
        (drawable.resizeWhenDistant === undefined
          ? drawable.distance
          : drawable.resizeWhenDistant
          ? drawable.distance
          : 1),
      h:
        drawable.h /
        (drawable.resizeWhenDistant === undefined
          ? drawable.distance
          : drawable.resizeWhenDistant
          ? drawable.distance
          : 1),
      img: sprites[drawable.name + dir + blockingAction + verticalAction + action + animation],
    };
  };

  private isVisible = (camera: ICamera, d: IDrawable): boolean => {
    if (
      this.offsetX(camera, d.x, d.distance) >= 0 - d.w &&
      this.offsetX(camera, d.x, d.distance) <= camera.w &&
      this.offsetY(camera, d.y, d.distance) >= 0 - d.h &&
      this.offsetY(camera, d.y, d.distance) <= camera.h
    ) {
      return true;
    }
    return false;
  };

  private offsetX = (camera: ICamera, x: number, distance: number): number => {
    return Math.round(x / distance) - Math.round(camera.x / distance) + Math.round(camera.w * 0.5 * (1 - 1 / distance));
  };

  private offsetY = (camera: ICamera, y: number, distance: number): number => {
    return Math.round(y / distance) - Math.round(camera.y / distance) + Math.round(camera.h * 0.5 * (1 - 1 / distance));
  };
}
