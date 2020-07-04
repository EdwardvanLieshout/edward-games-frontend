import { Component, OnInit, ElementRef, ViewChild, HostListener, ChangeDetectorRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { TextureTypeEnum } from '../../../../../../shared/models/enums/textureType.enum';
import { TileTypeEnum } from '../../../../../../shared/models/enums/tileType.enum';
import { MapService } from '../../../../../../core/services/map.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomViewComponent implements OnInit {

  public SCREEN_WIDTH = 600;
  public SCREEN_HEIGHT = 400;

  public readonly TEXTURE_WIDTH = 64;
  public readonly TEXTURE_HEIGHT = 64;

  public showCanvas = false;

  public rotatingLeft: boolean;
  public rotatingRight: boolean;
  public movingForward: boolean;
  public movingBackward: boolean;

  public tileEnum = TileTypeEnum;
  public texEnum = TextureTypeEnum;

  @Output()
  public tickFinished: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;


  private ctx: CanvasRenderingContext2D;
  private data: ImageData;

  private textures: ImageData[];

  private tick;

  constructor(public mapService: MapService, private ref: ChangeDetectorRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event?): void {
   this.SCREEN_WIDTH = this.canvas.nativeElement.width;
   this.SCREEN_HEIGHT = this.canvas.nativeElement.height;
   this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  public ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.loadTexture('texture0').then((imageData0) => {
      this.loadTexture('texture1').then((imageData1) => {
        this.loadTexture('texture2').then((imageData2) => {
          this.textures = [
            imageData0,
            imageData1,
            imageData2,
          ];
          this.showCanvas = true;
          this.ref.markForCheck();
          this.onResize();
          this.performTick();
        });
      });
    });
  }

  public performTick = (): void => {
    if (this.rotatingRight) {
      this.rotateRight();
    }
    if (this.rotatingLeft) {
      this.rotateLeft();
    }
    if (this.movingForward) {
      this.moveForward();
    }
    if (this.movingBackward) {
      this.moveBackward();
    }
    this.calculateRays();
    clearTimeout(this.tick);
    this.tickFinished.emit();
    this.tick = setTimeout(() => {
    this.performTick();
    }, 30);
  }

  public startRotateRight = (): void => {
    if (!this.rotatingRight) {
      this.rotatingRight = true;
      clearTimeout(this.tick);
      this.performTick();
    }
  }

  public cancelRotateRight = (): void => {
    this.rotatingRight = false;
    clearTimeout(this.tick);
    this.performTick();
  }

  public startRotateLeft = (): void => {
    if (!this.rotatingLeft) {
      this.rotatingLeft = true;
      clearTimeout(this.tick);
      this.performTick();
    }
  }

  public cancelRotateLeft = (): void => {
    this.rotatingLeft = false;
    clearTimeout(this.tick);
    this.performTick();
  }

  public startMoveForward = (): void => {
    if (!this.movingForward) {
      this.movingForward = true;
      clearTimeout(this.tick);
      this.performTick();
    }
  }

  public cancelMoveForward = (): void => {
    this.movingForward = false;
    clearTimeout(this.tick);
    this.performTick();
  }

  public startMoveBackward = (): void => {
    if (!this.movingBackward) {
      this.movingBackward = true;
      clearTimeout(this.tick);
      this.performTick();
    }
  }

  public cancelMoveBackward = (): void => {
    this.movingBackward = false;
    clearTimeout(this.tick);
    this.performTick();
  }

  public calculateRays = (): void => {

    this.data = this.ctx.createImageData(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);

    for (let y = 0; y < this.SCREEN_HEIGHT; y++){
      const rayDirX0 = this.mapService.getDirX() - this.mapService.getPlaneX();
      const rayDirY0 = this.mapService.getDirY() - this.mapService.getPlaneY();
      const rayDirX1 = this.mapService.getDirX() + this.mapService.getPlaneX();
      const rayDirY1 = this.mapService.getDirY() + this.mapService.getPlaneY();

      const p = y - this.SCREEN_HEIGHT / 2;

      const posZ = 0.5 * this.SCREEN_HEIGHT;

      const rowDistance = posZ / p;

      const floorStepX = rowDistance * (rayDirX1 - rayDirX0) / this.SCREEN_WIDTH;
      const floorStepY = rowDistance * (rayDirY1 - rayDirY0) / this.SCREEN_WIDTH;

      let floorX = this.mapService.getPosX() + rowDistance * rayDirX0;
      let floorY = this.mapService.getPosY() + rowDistance * rayDirY0;
      for (let x = 0; x < this.SCREEN_WIDTH; x++) {
        const cellX = Math.trunc(floorX);
        const cellY = Math.trunc(floorY);

        // tslint:disable-next-line:no-bitwise
        const tx = Math.trunc(this.TEXTURE_WIDTH * (floorX - cellX)) & (this.TEXTURE_WIDTH - 1);
        // tslint:disable-next-line:no-bitwise
        const ty = Math.trunc(this.TEXTURE_HEIGHT * (floorY - cellY)) & (this.TEXTURE_HEIGHT - 1);

        floorX += floorStepX;
        floorY += floorStepY;

        let floorTexture;
        let ceilingTexture;

        if (this.mapService.getMap()[cellX] && this.mapService.getMap()[cellX][cellY]) {
          floorTexture = this.mapService.getMap()[cellX][cellY].tex0;
          ceilingTexture = this.mapService.getMap()[cellX][cellY].tex1;
        } else {
          floorTexture = 0;
          ceilingTexture = 0;
        }
        if (!ceilingTexture){
          ceilingTexture = 0;
        }
        const texIndex = (this.TEXTURE_WIDTH * ty + tx) * 4;
        let color = {
          r: this.textures[floorTexture].data[texIndex],
          g: this.textures[floorTexture].data[texIndex + 1],
          b: this.textures[floorTexture].data[texIndex + 2],
          a: this.textures[floorTexture].data[texIndex + 3]
        };

        color.r = color.r / rowDistance;
        color.g = color.g / rowDistance;
        color.b = color.b / rowDistance;
        let dataIndex = (y * this.SCREEN_WIDTH + x) * 4;
        this.data.data[dataIndex] = color.r;
        this.data.data[dataIndex + 1] = color.g;
        this.data.data[dataIndex + 2] = color.b;
        this.data.data[dataIndex + 3] = color.a;

        color = {
          r: this.textures[ceilingTexture].data[texIndex],
          g: this.textures[ceilingTexture].data[texIndex + 1],
          b: this.textures[ceilingTexture].data[texIndex + 2],
          a: this.textures[ceilingTexture].data[texIndex + 3]
        };

        color.r = color.r / rowDistance;
        color.g = color.g / rowDistance;
        color.b = color.b / rowDistance;
        dataIndex = ((this.SCREEN_HEIGHT - y - 1) * this.SCREEN_WIDTH + x) * 4;
        this.data.data[dataIndex] = color.r;
        this.data.data[dataIndex + 1] = color.g;
        this.data.data[dataIndex + 2] = color.b;
        this.data.data[dataIndex + 3] = color.a;
      }
    }

    for (let x = 0; x < this.SCREEN_WIDTH; x++) {
      const cameraX = 2 * x / this.SCREEN_WIDTH - 1;
      const rayDirX = this.mapService.getDirX() + this.mapService.getPlaneX() * cameraX;
      const rayDirY = this.mapService.getDirY() + this.mapService.getPlaneY() * cameraX;

      let mapX = Math.trunc(this.mapService.getPosX());
      let mapY = Math.trunc(this.mapService.getPosY());

      let sideDistX;
      let sideDistY;

      const deltaDistX = Math.sqrt(1 + (rayDirY * rayDirY) / (rayDirX * rayDirX));
      const deltaDistY = Math.sqrt(1 + (rayDirX * rayDirX) / (rayDirY * rayDirY));
      let perpWallDist;

      let stepX;
      let stepY;

      let hit = false;
      let side = false;

      if (rayDirX < 0)
      {
        stepX = -1;
        sideDistX = (this.mapService.getPosX() - mapX) * deltaDistX;
      }
      else
      {
        stepX = 1;
        sideDistX = (mapX + 1.0 - this.mapService.getPosX()) * deltaDistX;
      }
      if (rayDirY < 0)
      {
        stepY = -1;
        sideDistY = (this.mapService.getPosY() - mapY) * deltaDistY;
      }
      else
      {
        stepY = 1;
        sideDistY = (mapY + 1.0 - this.mapService.getPosY()) * deltaDistY;
      }
      while (!hit)
      {
        if (sideDistX < sideDistY)
        {
          sideDistX += deltaDistX;
          mapX += stepX;
          side = false;
        }
        else
        {
          sideDistY += deltaDistY;
          mapY += stepY;
          side = true;
        }
        if (this.mapService.getMap()[mapX][mapY].tileType === this.tileEnum.WALL){
          hit = true;
        }
      }

      if (!side) {
        perpWallDist = (mapX - this.mapService.getPosX() + (1 - stepX) / 2) / rayDirX;
      }
      else {
        perpWallDist = (mapY - this.mapService.getPosY() + (1 - stepY) / 2) / rayDirY;
      }

      const lineHeight = Math.trunc(this.SCREEN_HEIGHT / perpWallDist);

      let drawStart = Math.trunc(-lineHeight / 2 + this.SCREEN_HEIGHT / 2);
      if (drawStart < 0) {
        drawStart = 0;
      }
      let drawEnd = Math.trunc(lineHeight / 2 + this.SCREEN_HEIGHT / 2);
      if (drawEnd >= this.SCREEN_HEIGHT) {
        drawEnd = this.SCREEN_HEIGHT - 1;
      }

      const texNum = this.mapService.getMap()[mapX][mapY].tex0;

      let wallX;
      if (!side) {
        wallX = this.mapService.getPosY() + perpWallDist * rayDirY;
      }
      else {
        wallX = this.mapService.getPosX() + perpWallDist * rayDirX;
      }
      wallX -= Math.trunc(wallX);
      let texX = Math.trunc(wallX * this.TEXTURE_WIDTH);
      if (!side && rayDirX > 0) {
        texX = this.TEXTURE_WIDTH - texX - 1;
      }
      if (side && rayDirY < 0) {
        texX = this.TEXTURE_WIDTH - texX - 1;
      }

      const step = 1.0 * this.TEXTURE_HEIGHT / lineHeight;
      let texPos = (drawStart - this.SCREEN_HEIGHT / 2 + lineHeight / 2) * step;
      for (let y = drawStart; y < drawEnd; y++) {

          // tslint:disable-next-line:no-bitwise
          const texY = Math.trunc(texPos) & (this.TEXTURE_HEIGHT - 1);
          texPos += step;
          const texIndex = (this.TEXTURE_HEIGHT * texY + texX) * 4;
          const color = {
            r: this.textures[texNum].data[texIndex],
            g: this.textures[texNum].data[texIndex + 1],
            b: this.textures[texNum].data[texIndex + 2],
            a: this.textures[texNum].data[texIndex + 3]
          };

          color.r = color.r * (lineHeight > this.SCREEN_HEIGHT ? this.SCREEN_HEIGHT : lineHeight) / this.SCREEN_HEIGHT;
          color.g = color.g * (lineHeight > this.SCREEN_HEIGHT ? this.SCREEN_HEIGHT : lineHeight) / this.SCREEN_HEIGHT;
          color.b = color.b * (lineHeight > this.SCREEN_HEIGHT ? this.SCREEN_HEIGHT : lineHeight) / this.SCREEN_HEIGHT;

          const dataIndex = (y * this.SCREEN_WIDTH + x) * 4;
          this.data.data[dataIndex] = color.r;
          this.data.data[dataIndex + 1] = color.g;
          this.data.data[dataIndex + 2] = color.b;
          this.data.data[dataIndex + 3] = color.a;
      }
    }
    this.ctx.putImageData(this.data, 0, 0);
  }

  private moveForward = (): void => {
    this.mapService.moveForward();
  }

  private moveBackward = (): void => {
    this.mapService.moveBackward();
  }

  private rotateRight = (): void => {
    this.mapService.rotateRight();
  }

  private rotateLeft = (): void => {
    this.mapService.rotateLeft();
  }

  private loadTexture = (name: string): Promise<ImageData> => {
    const image = new Image(this.TEXTURE_WIDTH, this.TEXTURE_HEIGHT);
    image.src = `../../../../assets/textures/${name}.png`;
    return new Promise((resolve, reject) => {
      image.onload = () => {
        this.ctx.drawImage(image, 0, 0);
        resolve(this.ctx.getImageData(0, 0, this.TEXTURE_WIDTH, this.TEXTURE_HEIGHT));
      };
    });

  }
}
