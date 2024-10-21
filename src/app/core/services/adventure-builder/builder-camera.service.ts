import { Injectable } from '@angular/core';
import { ICamera } from '../../../shared/models/interfaces/camera.interface';
import { IDrawable } from '../../../shared/models/interfaces/drawable.interface';
import { IDrawCommand } from '../../../shared/models/interfaces/drawcommand.interface';
import { ILevel } from '../../../shared/models/interfaces/level.interface';

@Injectable({
  providedIn: 'root',
})
export class BuilderCameraService {
  private uiAnimDelay = 0;
  public camera: ICamera = {
    x: 100,
    y: 100,
    w: 800,
    h: 500,
  };
  public moving = false;
  public left = false;
  public right = false;
  public up = false;
  public down = false;

  public reposition = (level: ILevel, newX: number, newY: number): void => {
    this.camera.x = newX;
    this.camera.y = newY;
    if (this.camera.x < 100) {
      this.camera.x = 100;
    }
    if (this.camera.x > level.width - this.camera.w - 100) {
      this.camera.x = level.width - this.camera.w - 100;
    }
    if (this.camera.y < 100) {
      this.camera.y = 100;
    }
    if (this.camera.y > level.height - this.camera.h - 100) {
      this.camera.y = level.height - this.camera.h - 100;
    }
  };

  // tslint:disable-next-line:no-any
  public getDrawCommands = (level: ILevel, sprites: any): IDrawCommand[] => {
    let newX = this.camera.x;
    let newY = this.camera.y;
    if (this.moving) {
      newX += this.left ? -20 : this.right ? 20 : 0;
      newY += this.up ? -20 : this.down ? 20 : 0;
    }
    this.reposition(level, newX, newY);
    const drawCommands: IDrawCommand[] = [];
    drawCommands.push({ x: 0, y: 0, w: this.camera.w, h: this.camera.h, img: sprites.bg });
    drawCommands.push({
      x: 0,
      y: 0,
      w: this.camera.w,
      h: this.camera.h,
      alpha: this.camera.x / (level.width - this.camera.w),
      img: sprites.bgfade,
    });
    for (const drawable of level.skyLineLayer) {
      if (this.isVisible(this.camera, drawable)) {
        drawCommands.push(this.createDrawCommand(this.camera, drawable, sprites));
      }
    }
    for (const drawable of level.backLayer) {
      if (this.isVisible(this.camera, drawable)) {
        drawCommands.push(this.createDrawCommand(this.camera, drawable, sprites));
      }
    }
    for (const drawable of level.centerLayer) {
      if (this.isVisible(this.camera, drawable)) {
        drawCommands.push(this.createDrawCommand(this.camera, drawable, sprites));
      }
    }
    for (const drawable of level.frontLayer) {
      if (this.isVisible(this.camera, drawable)) {
        drawCommands.push(this.createDrawCommand(this.camera, drawable, sprites));
      }
    }
    this.uiAnimDelay++;
    for (const ui of level.uiDrawables) {
      if (
        this.intersectRect(
          this.camera.x + this.camera.w / 2 - level.player.w / 2,
          this.camera.h + this.camera.h / 2 - level.player.h / 2,
          level.player.w,
          level.player.h,
          ui.x,
          ui.y,
          ui.w,
          ui.h
        )
      ) {
        drawCommands.push(this.createUIDrawCommand(ui.uiDrawable, sprites));
      }

      if (this.uiAnimDelay === 12) {
        ui.uiDrawable.animationCounter = (ui.uiDrawable.animationCounter % ui.uiMaxAnim) + 1;
      }
    }
    if (this.uiAnimDelay === 12) {
      this.uiAnimDelay = 0;
    }
    return drawCommands;
  };

  public updateAnimatedDrawables = (level: ILevel): void => {
    for (let drawable of level.animatedDrawables) {
      drawable.animationCounterDelay++;
      if (drawable.animationCounterDelay === (drawable.animationSleep ?? 3)) {
        drawable.animationCounterDelay = 0;
        drawable.animationCounter = (drawable.animationCounter % (drawable.maxFrame ?? 4)) + 1;
      }
    }
  };

  // tslint:disable-next-line:no-any
  private createUIDrawCommand = (drawable: IDrawable, sprites: any): IDrawCommand => {
    const animation = drawable.animationCounter ? drawable.animationCounter : '';
    return { x: drawable.x, y: drawable.y, w: drawable.w, h: drawable.h, img: sprites[drawable.name + animation] };
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
    if (d.hidden) {
      return false;
    }
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

  public offsetX = (camera: ICamera, x: number, distance: number): number => {
    return Math.round(x / distance) - Math.round(camera.x / distance) + Math.round(camera.w * 0.5 * (1 - 1 / distance));
  };

  public offsetY = (camera: ICamera, y: number, distance: number): number => {
    return Math.round(y / distance) - Math.round(camera.y / distance) + Math.round(camera.h * 0.5 * (1 - 1 / distance));
  };

  private intersectRect = (
    x1: number,
    y1: number,
    w1: number,
    h1: number,
    x2: number,
    y2: number,
    w2: number,
    h2: number
  ): boolean => {
    return this.intersectRange(x1, x1 + w1, x2, x2 + w2) && this.intersectRange(y1, y1 + h1, y2, y2 + h2);
  };
  private intersectRange = (ax1: number, ax2: number, bx1: number, bx2: number): boolean => {
    return Math.max(ax1, bx1) <= Math.min(ax2, bx2);
  };
}
