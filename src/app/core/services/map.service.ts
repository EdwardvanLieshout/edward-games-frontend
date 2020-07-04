import { Injectable } from '@angular/core';
import { TileTypeEnum } from '../../shared/models/enums/tileType.enum';
import { TextureTypeEnum } from '../../shared/models/enums/textureType.enum';
import { ITile } from '../../shared/models/interfaces/tile.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {


  public readonly MAP_WIDTH = 15;
  public readonly MAP_HEIGHT = 15;
  public tileEnum = TileTypeEnum;
  public texEnum = TextureTypeEnum;
  public worldMap: ITile[][] = [
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.FLOOR, tex0: this.texEnum.REDGRID, tex1: this.texEnum.BLUEGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
    [
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID},
      {tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID}
    ],
  ];

  private posX = 5.3;
  private posY = 5.3;
  private dirX = -1.0;
  private dirY = 0.0;
  private planeX = 0.0;
  private planeY = 0.66;
  private moveSpeed = 0.06 * 2.0;
  private rotSpeed = 0.06 * 2.0;

  public getMap = (): ITile[][] => {
    return this.worldMap;
  }

  public getPosX = (): number => {
    return this.posX;
  }

  public getPosY = (): number => {
    return this.posY;
  }

  public getDirX = (): number => {
    return this.dirX;
  }

  public getDirY = (): number => {
    return this.dirY;
  }

  public getPlaneX = (): number => {
    return this.planeX;
  }

  public getPlaneY = (): number => {
    return this.planeY;
  }

  public moveForward = (): void => {
    if (!this.getMap()[
      Math.trunc(this.getPosX() + this.getDirX() * this.moveSpeed)
    ]
    [
      Math.trunc(this.getPosY())
    ].tileType) {
      this.setPosX(this.getPosX() + this.getDirX() * this.moveSpeed);
    }
    if (!this.getMap()[
      Math.trunc(this.getPosX())
    ]
    [
      Math.trunc(this.getPosY() + this.getDirY() * this.moveSpeed)
    ].tileType) {
      this.setPosY(this.getPosY() + this.getDirY() * this.moveSpeed);
    }
  }

  public moveBackward = (): void => {
    if (!this.getMap()[
      Math.trunc(this.getPosX() - this.getDirX() * this.moveSpeed)
    ]
    [
      Math.trunc(this.getPosY())
    ].tileType) {
      this.setPosX(this.getPosX() - this.getDirX() * this.moveSpeed);
    }
    if (!this.getMap()[
      Math.trunc(this.getPosX())
    ]
    [
      Math.trunc(this.getPosY() - this.getDirY() * this.moveSpeed)
    ].tileType) {
      this.setPosY(this.getPosY() - this.getDirY() * this.moveSpeed);
    }
  }

  public rotateRight = (): void => {
    const oldDirX = this.getDirX();
    this.setDirX(this.getDirX() * Math.cos(-this.rotSpeed) - this.getDirY() * Math.sin(-this.rotSpeed));
    this.setDirY(oldDirX * Math.sin(-this.rotSpeed) + this.getDirY() * Math.cos(-this.rotSpeed));
    const oldPlaneX = this.getPlaneX();
    this.setPlaneX(this.getPlaneX() * Math.cos(-this.rotSpeed) - this.getPlaneY() * Math.sin(-this.rotSpeed));
    this.setPlaneY(oldPlaneX * Math.sin(-this.rotSpeed) + this.getPlaneY() * Math.cos(-this.rotSpeed));
  }

  public rotateLeft = (): void => {
    const oldDirX = this.getDirX();
    this.setDirX(this.getDirX() * Math.cos(this.rotSpeed) - this.getDirY() * Math.sin(this.rotSpeed));
    this.setDirY(oldDirX * Math.sin(this.rotSpeed) + this.getDirY() * Math.cos(this.rotSpeed));
    const oldPlaneX = this.getPlaneX();
    this.setPlaneX(this.getPlaneX() * Math.cos(this.rotSpeed) - this.getPlaneY() * Math.sin(this.rotSpeed));
    this.setPlaneY(oldPlaneX * Math.sin(this.rotSpeed) + this.getPlaneY() * Math.cos(this.rotSpeed));
  }


  private setPosX = (newValue: number): void => {
    this.posX = newValue;
  }

  private setPosY = (newValue: number): void => {
    this.posY = newValue;
  }

  private setDirX = (newValue: number): void => {
    this.dirX = newValue;
  }

  private setDirY = (newValue: number): void => {
    this.dirY = newValue;
  }

  private setPlaneX = (newValue: number): void => {
    this.planeX = newValue;
  }

  private setPlaneY = (newValue: number): void => {
    this.planeY = newValue;
  }

}
