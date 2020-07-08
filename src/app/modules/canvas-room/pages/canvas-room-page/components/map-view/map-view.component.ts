import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, Self, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { MapService } from '../../../../../../core/services/map.service';
import { TileTypeEnum } from '../../../../../../shared/models/enums/tileType.enum';
import { OnDestroyService } from '../../../../../../core/services/on-destroy.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OnDestroyService],
})
export class MapViewComponent implements OnInit {
  public SCREEN_WIDTH = 150;
  public SCREEN_HEIGHT = 150;
  public events: Observable<void>;

  @ViewChild('canvas', { static: true })
  public canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  constructor(
    public mapService: MapService,
    @Self()
    @Optional()
    private onDestroyService: OnDestroyService
  ) {}

  public ngOnInit(): void {
    this.events = this.mapService.getPositionEvents();
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.events.pipe(takeUntil(this.onDestroyService)).subscribe(() => this.performTick());
    this.performTick();
  }

  public performTick = (): void => {
    this.ctx.fillStyle = 'rgb(100, 100, 100)';
    this.ctx.fillRect(0, 0, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
    for (let i = -1; i <= 1; i += 0.1) {
      this.drawCameraRay(i, 'rgb(100, 180, 100', 7);
    }
    for (let x = 0; x < this.mapService.MAP_WIDTH; x++) {
      for (let y = 0; y < this.mapService.MAP_HEIGHT; y++) {
        if (this.mapService.getMap()[y][x].tileType === TileTypeEnum.WALL) {
          this.ctx.fillStyle = 'rgb(200, 200, 200)';
          this.ctx.fillRect(
            (x * this.SCREEN_WIDTH) / this.mapService.MAP_WIDTH,
            (y * this.SCREEN_HEIGHT) / this.mapService.MAP_HEIGHT,
            this.SCREEN_WIDTH / this.mapService.MAP_WIDTH,
            this.SCREEN_HEIGHT / this.mapService.MAP_HEIGHT
          );
        }
      }
    }
    this.ctx.fillStyle = 'rgb(100, 255, 100)';
    this.ctx.fillRect(
      (this.mapService.getPosY() * this.SCREEN_HEIGHT) / this.mapService.MAP_HEIGHT - 2,
      (this.mapService.getPosX() * this.SCREEN_WIDTH) / this.mapService.MAP_WIDTH - 2,
      4,
      4
    );
  };

  public drawCameraRay = (cameraX: number, strokeStyle: string, lineWidth: number): void => {
    const rayDirX = this.mapService.getDirX() + this.mapService.getPlaneX() * cameraX;
    const rayDirY = this.mapService.getDirY() + this.mapService.getPlaneY() * cameraX;

    let mapX = Math.trunc(this.mapService.getPosX());
    let mapY = Math.trunc(this.mapService.getPosY());

    let sideDistX;
    let sideDistY;

    const deltaDistX = Math.abs(1 / rayDirX);
    const deltaDistY = Math.abs(1 / rayDirY);

    let stepX;
    let stepY;

    let hit = false;
    let side = false;

    if (rayDirX < 0) {
      stepX = -1;
      sideDistX = (this.mapService.getPosX() - mapX) * deltaDistX;
    } else {
      stepX = 1;
      sideDistX = (mapX + 1.0 - this.mapService.getPosX()) * deltaDistX;
    }
    if (rayDirY < 0) {
      stepY = -1;
      sideDistY = (this.mapService.getPosY() - mapY) * deltaDistY;
    } else {
      stepY = 1;
      sideDistY = (mapY + 1.0 - this.mapService.getPosY()) * deltaDistY;
    }
    while (!hit) {
      if (sideDistX < sideDistY) {
        sideDistX += deltaDistX;
        mapX += stepX;
        side = false;
      } else {
        sideDistY += deltaDistY;
        mapY += stepY;
        side = true;
      }
      if (this.mapService.getMap()[mapX][mapY].tileType === TileTypeEnum.WALL) {
        hit = true;
      }
    }
    let perpWallDist;
    if (!side) {
      perpWallDist = (mapX - this.mapService.getPosX() + (1 - stepX) / 2) / rayDirX;
    } else {
      perpWallDist = (mapY - this.mapService.getPosY() + (1 - stepY) / 2) / rayDirY;
    }

    this.ctx.beginPath();
    this.ctx.moveTo(
      (this.mapService.getPosY() * this.SCREEN_HEIGHT) / this.mapService.MAP_HEIGHT,
      (this.mapService.getPosX() * this.SCREEN_WIDTH) / this.mapService.MAP_WIDTH
    );
    this.ctx.lineTo(
      ((this.mapService.getPosY() + (perpWallDist + 0.1) * rayDirY) * this.SCREEN_HEIGHT) / this.mapService.MAP_HEIGHT,
      ((this.mapService.getPosX() + (perpWallDist + 0.1) * rayDirX) * this.SCREEN_WIDTH) / this.mapService.MAP_WIDTH
    );
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = strokeStyle;
    this.ctx.stroke();
  };
}
