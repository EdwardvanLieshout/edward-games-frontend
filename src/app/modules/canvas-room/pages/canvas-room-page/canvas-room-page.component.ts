import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-canvas-room-page',
  templateUrl: './canvas-room-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasRoomPageComponent implements OnInit {

  public readonly SCREEN_WIDTH = 640;
  public readonly SCREEN_HEIGHT = 480;

  public readonly TEXTURE_WIDTH = 64;
  public readonly TEXTURE_HEIGHT = 64;

  public readonly MAP_WIDTH = 24;
  public readonly MAP_HEIGHT = 24;

  public showCanvas: boolean;

  public rotatingLeft: boolean;
  public rotatingRight: boolean;
  public movingForward: boolean;

  public worldMap = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 7, 7],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 7],
    [4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
    [4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
    [4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 7],
    [4, 0, 4, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 0, 7, 7, 7, 7, 7],
    [4, 0, 5, 0, 0, 0, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 7, 0, 0, 0, 7, 7, 7, 1],
    [4, 0, 6, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 7, 0, 0, 0, 0, 0, 0, 8],
    [4, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 1],
    [4, 0, 8, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 7, 0, 0, 0, 0, 0, 0, 8],
    [4, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 7, 0, 0, 0, 7, 7, 7, 1],
    [4, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 1],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [6, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 6, 0, 6, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6, 0, 6, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 0, 0, 5, 0, 0, 2, 0, 0, 0, 2],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6, 0, 6, 2, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2],
    [4, 0, 6, 0, 6, 0, 0, 0, 0, 4, 6, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 2],
    [4, 0, 0, 5, 0, 0, 0, 0, 0, 4, 6, 0, 6, 2, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2],
    [4, 0, 6, 0, 6, 0, 0, 0, 0, 4, 6, 0, 6, 2, 0, 0, 5, 0, 0, 2, 0, 0, 0, 2],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6, 0, 6, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]
  ];

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private data: ImageData;

  private textures: ImageData[];

  private posX = 22.0;
  private posY = 11.5;
  private dirX = -1.0;
  private dirY = 0.0;
  private planeX = 0.0;
  private planeY = 0.66;
  private time = 0;
  private oldTime = 0;

  public ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.loadTexture().then((imageData) => {
      this.textures = [
        imageData,
        imageData,
        imageData,
        imageData,
        imageData,
        imageData,
        imageData,
        imageData
      ];
      this.showCanvas = true;
      this.performTick();
    });
  }

  public performTick = (): void => {
    this.calculateRays();
    if (this.rotatingRight) {
      this.rotateRight();
    }
    if (this.rotatingLeft) {
      this.rotateLeft();
    }
    if (this.movingForward) {
      this.moveForward();
    }
    setTimeout(() => {
      this.performTick();
    }, 60);
  }

  public startRotateRight = (): void => {
    this.rotatingRight = true;
  }

  public cancelRotateRight = (): void => {
    this.rotatingRight = false;
  }

  public startRotateLeft = (): void => {
    this.rotatingLeft = true;
  }

  public cancelRotateLeft = (): void => {
    this.rotatingLeft = false;
  }

  public startMoveForward = (): void => {
    this.movingForward = true;
  }

  public cancelMoveForward = (): void => {
    this.movingForward = false;
  }

  public calculateRays = (): void => {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(0, 0, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.SCREEN_WIDTH / 2, this.SCREEN_HEIGHT / 2, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);

    this.data = this.ctx.createImageData(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);

    for (let x = 0; x < this.SCREEN_WIDTH; x++) {
      const cameraX = 2 * x / this.SCREEN_WIDTH - 1;
      const rayDirX = this.dirX + this.planeX * cameraX;
      const rayDirY = this.dirY + this.planeY * cameraX;

      let mapX = Math.trunc(this.posX);
      let mapY = Math.trunc(this.posY);

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
        sideDistX = (this.posX - mapX) * deltaDistX;
      }
      else
      {
        stepX = 1;
        sideDistX = (mapX + 1.0 - this.posX) * deltaDistX;
      }
      if (rayDirY < 0)
      {
        stepY = -1;
        sideDistY = (this.posY - mapY) * deltaDistY;
      }
      else
      {
        stepY = 1;
        sideDistY = (mapY + 1.0 - this.posY) * deltaDistY;
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
        if (this.worldMap[mapX][mapY] > 0){
          hit = true;
        }
      }

      if (!side) {
        perpWallDist = (mapX - this.posX + (1 - stepX) / 2) / rayDirX;
      }
      else {
        perpWallDist = (mapY - this.posY + (1 - stepY) / 2) / rayDirY;
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

      const texNum = this.worldMap[mapX][mapY] - 1;

      let wallX;
      if (!side) {
        wallX = this.posY + perpWallDist * rayDirY;
      }
      else {
        wallX = this.posX + perpWallDist * rayDirX;
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
      for (let y = 0; y < this.SCREEN_HEIGHT; y++) {

        if (y >= drawStart && y < drawEnd) {
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
        else {
          const dataIndex = (y * this.SCREEN_WIDTH + x) * 4;
          const brightness = Math.abs((y - this.SCREEN_HEIGHT / 2) / this.SCREEN_HEIGHT * 2);
          this.data.data[dataIndex] = (y < this.SCREEN_HEIGHT / 2 ? 255 : 150) * brightness;
          this.data.data[dataIndex + 1] = (y < this.SCREEN_HEIGHT / 2 ? 255 : 150) * brightness;
          this.data.data[dataIndex + 2] = (y < this.SCREEN_HEIGHT / 2 ? 255 : 150) * brightness;
          this.data.data[dataIndex + 3] = 255;
        }

      }
    }
    this.ctx.putImageData(this.data, 0, 0);
  }

  private moveForward = (): void => {
    const moveSpeed = 0.06 * 2.0;
    if (!this.worldMap[Math.trunc(this.posX + this.dirX * moveSpeed)][Math.trunc(this.posY)]) {
      this.posX += this.dirX * moveSpeed;
    }
    if (!this.worldMap[Math.trunc(this.posX)][Math.trunc(this.posY + this.dirY * moveSpeed)]) {
      this.posY += this.dirY * moveSpeed;
    }
  }

  private rotateRight = (): void => {
    const rotSpeed = 0.06 * 2.0;
    const oldDirX = this.dirX;
    this.dirX = this.dirX * Math.cos(-rotSpeed) - this.dirY * Math.sin(-rotSpeed);
    this.dirY = oldDirX * Math.sin(-rotSpeed) + this.dirY * Math.cos(-rotSpeed);
    const oldPlaneX = this.planeX;
    this.planeX = this.planeX * Math.cos(-rotSpeed) - this.planeY * Math.sin(-rotSpeed);
    this.planeY = oldPlaneX * Math.sin(-rotSpeed) + this.planeY * Math.cos(-rotSpeed);
  }

  private rotateLeft = (): void => {
    const rotSpeed = 0.06 * 2.0;
    const oldDirX = this.dirX;
    this.dirX = this.dirX * Math.cos(rotSpeed) - this.dirY * Math.sin(rotSpeed);
    this.dirY = oldDirX * Math.sin(rotSpeed) + this.dirY * Math.cos(rotSpeed);
    const oldPlaneX = this.planeX;
    this.planeX = this.planeX * Math.cos(rotSpeed) - this.planeY * Math.sin(rotSpeed);
    this.planeY = oldPlaneX * Math.sin(rotSpeed) + this.planeY * Math.cos(rotSpeed);
  }

  private loadTexture = (): Promise<ImageData> => {
    const image = new Image(this.TEXTURE_WIDTH, this.TEXTURE_HEIGHT);
    image.src = '../../../../assets/textures/texture.png';
    return new Promise((resolve, reject) => {
      image.onload = () => {
        this.ctx.drawImage(image, 0, 0);
        resolve(this.ctx.getImageData(0, 0, this.TEXTURE_WIDTH, this.TEXTURE_HEIGHT));
      };
    });

  }

}
