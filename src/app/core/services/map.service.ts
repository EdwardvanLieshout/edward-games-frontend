import { Injectable } from '@angular/core';
import { TileTypeEnum } from '../../shared/models/enums/tileType.enum';
import { TextureTypeEnum } from '../../shared/models/enums/textureType.enum';
import { ITile } from '../../shared/models/interfaces/tile.interface';
import { RoomTypeEnum } from '../../shared/models/enums/roomType.enum';
import { Subject, Observable } from 'rxjs';
import { PassageTypeEnum } from '../../shared/models/enums/passageType.enum';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  public readonly MAP_WIDTH = 15;
  public readonly MAP_HEIGHT = 15;

  private mapUpdated: Subject<void> = new Subject<void>();
  private canNavigate: Subject<PassageTypeEnum> = new Subject<PassageTypeEnum>();

  private currentPassage: PassageTypeEnum = PassageTypeEnum.NONE;

  private tileEnum = TileTypeEnum;
  private texEnum = TextureTypeEnum;
  private worldMap: ITile[][] = [
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.PORTAL1 },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.TV1 },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GRASS,
        tex1: this.texEnum.SKY,
        room: RoomTypeEnum.ADVENTURE,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GRASS,
        tex1: this.texEnum.SKY,
        room: RoomTypeEnum.ADVENTURE,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.TV1 },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GRASS,
        tex1: this.texEnum.SKY,
        room: RoomTypeEnum.ADVENTURE,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.AUTHOR,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GRASS,
        tex1: this.texEnum.SKY,
        room: RoomTypeEnum.ADVENTURE,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GRASS,
        tex1: this.texEnum.SKY,
        room: RoomTypeEnum.ADVENTURE,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GRASS,
        tex1: this.texEnum.SKY,
        room: RoomTypeEnum.MAIN,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.MAIN,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.MAIN,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.MAIN,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.TV1 },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.WOOD,
        tex1: this.texEnum.PLAIN,
        room: RoomTypeEnum.AUTHOR,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GRASS,
        tex1: this.texEnum.SKY,
        room: RoomTypeEnum.MAIN,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.MAIN,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.MAIN,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.MAIN,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.BRICKWALL },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.TV1 },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.SOCIAL,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      {
        tileType: this.tileEnum.FLOOR,
        tex0: this.texEnum.GREENGRID,
        tex1: this.texEnum.GREENGRID,
        room: RoomTypeEnum.GADGETS,
      },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
    ],
    [
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.GREENGRID },
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
  };

  public getPositionEvents = (): Observable<void> => {
    return this.mapUpdated.asObservable();
  };

  public getPassageEvents = (): Observable<PassageTypeEnum> => {
    return this.canNavigate.asObservable();
  };

  public getPosX = (): number => {
    return this.posX;
  };

  public getPosY = (): number => {
    return this.posY;
  };

  public getDirX = (): number => {
    return this.dirX;
  };

  public getDirY = (): number => {
    return this.dirY;
  };

  public getPlaneX = (): number => {
    return this.planeX;
  };

  public getPlaneY = (): number => {
    return this.planeY;
  };

  public moveForward = (tickStart: Date, tickEnd: Date): void => {
    const speedModifier = (tickEnd.getTime() - tickStart.getTime()) / 60;
    if (
      !this.getMap()[Math.trunc(this.getPosX() + this.getDirX() * this.moveSpeed * speedModifier)][
        Math.trunc(this.getPosY())
      ].tileType
    ) {
      this.setPosX(this.getPosX() + this.getDirX() * this.moveSpeed * speedModifier);
    }
    if (
      !this.getMap()[Math.trunc(this.getPosX())][
        Math.trunc(this.getPosY() + this.getDirY() * this.moveSpeed * speedModifier)
      ].tileType
    ) {
      this.setPosY(this.getPosY() + this.getDirY() * this.moveSpeed * speedModifier);
    }
    this.mapUpdated.next();
    this.checkScreens();
  };

  public moveBackward = (tickStart: Date, tickEnd: Date): void => {
    const speedModifier = (tickEnd.getTime() - tickStart.getTime()) / 60;
    if (
      !this.getMap()[Math.trunc(this.getPosX() - this.getDirX() * this.moveSpeed * speedModifier)][
        Math.trunc(this.getPosY())
      ].tileType
    ) {
      this.setPosX(this.getPosX() - this.getDirX() * this.moveSpeed * speedModifier);
    }
    if (
      !this.getMap()[Math.trunc(this.getPosX())][
        Math.trunc(this.getPosY() - this.getDirY() * this.moveSpeed * speedModifier)
      ].tileType
    ) {
      this.setPosY(this.getPosY() - this.getDirY() * this.moveSpeed * speedModifier);
    }
    this.mapUpdated.next();
    this.checkScreens();
  };

  public rotateRight = (tickStart: Date, tickEnd: Date): void => {
    const speedModifier = (tickEnd.getTime() - tickStart.getTime()) / 60;
    const oldDirX = this.getDirX();
    this.setDirX(
      this.getDirX() * Math.cos(-this.rotSpeed * speedModifier) -
        this.getDirY() * Math.sin(-this.rotSpeed * speedModifier)
    );
    this.setDirY(
      oldDirX * Math.sin(-this.rotSpeed * speedModifier) + this.getDirY() * Math.cos(-this.rotSpeed * speedModifier)
    );
    const oldPlaneX = this.getPlaneX();
    this.setPlaneX(
      this.getPlaneX() * Math.cos(-this.rotSpeed * speedModifier) -
        this.getPlaneY() * Math.sin(-this.rotSpeed * speedModifier)
    );
    this.setPlaneY(
      oldPlaneX * Math.sin(-this.rotSpeed * speedModifier) + this.getPlaneY() * Math.cos(-this.rotSpeed * speedModifier)
    );
    this.mapUpdated.next();
    this.checkScreens();
  };

  public rotateLeft = (tickStart: Date, tickEnd: Date): void => {
    const speedModifier = (tickEnd.getTime() - tickStart.getTime()) / 60;
    const oldDirX = this.getDirX();
    this.setDirX(
      this.getDirX() * Math.cos(this.rotSpeed * speedModifier) -
        this.getDirY() * Math.sin(this.rotSpeed * speedModifier)
    );
    this.setDirY(
      oldDirX * Math.sin(this.rotSpeed * speedModifier) + this.getDirY() * Math.cos(this.rotSpeed * speedModifier)
    );
    const oldPlaneX = this.getPlaneX();
    this.setPlaneX(
      this.getPlaneX() * Math.cos(this.rotSpeed * speedModifier) -
        this.getPlaneY() * Math.sin(this.rotSpeed * speedModifier)
    );
    this.setPlaneY(
      oldPlaneX * Math.sin(this.rotSpeed * speedModifier) + this.getPlaneY() * Math.cos(this.rotSpeed * speedModifier)
    );
    this.mapUpdated.next();
    this.checkScreens();
  };

  public getRoom = (): string => {
    return this.worldMap[Math.trunc(this.posX)][Math.trunc(this.posY)].room
      ? this.worldMap[Math.trunc(this.posX)][Math.trunc(this.posY)].room
      : '';
  };

  private setPosX = (newValue: number): void => {
    this.posX = newValue;
  };

  private setPosY = (newValue: number): void => {
    this.posY = newValue;
  };

  private setDirX = (newValue: number): void => {
    this.dirX = newValue;
  };

  private setDirY = (newValue: number): void => {
    this.dirY = newValue;
  };

  private setPlaneX = (newValue: number): void => {
    this.planeX = newValue;
  };

  private setPlaneY = (newValue: number): void => {
    this.planeY = newValue;
  };

  private checkPassage = (
    oldPassage: PassageTypeEnum,
    newPassage: PassageTypeEnum,
    condition: boolean,
    x: number,
    y: number,
    newTex: TextureTypeEnum
  ): boolean => {
    if (condition) {
      this.currentPassage = newPassage;
      if (oldPassage !== newPassage) {
        this.worldMap[x][y].tex0 = newTex;
        this.canNavigate.next(newPassage);
      }
      return true;
    }
    return false;
  };

  private checkScreens = (): void => {
    const oldPassage = this.currentPassage;
    let passageChanged = false;
    passageChanged = this.checkPassage(
      oldPassage,
      PassageTypeEnum.ABOUTAUTHOR,
      this.posX >= 1 && this.posX < 1.5 && this.posY > 9.2 && this.posY < 9.8 && this.dirX < -0.5,
      0,
      9,
      this.texEnum.TV1S
    );
    if (passageChanged) {
      return;
    }

    passageChanged = this.checkPassage(
      oldPassage,
      PassageTypeEnum.EXPERIENCE,
      this.posX > 2.2 && this.posX < 2.8 && this.posY >= 10.5 && this.posY < 11 && this.dirY > 0.5,
      2,
      11,
      this.texEnum.TV1S
    );
    if (passageChanged) {
      return;
    }

    passageChanged = this.checkPassage(
      oldPassage,
      PassageTypeEnum.MEDIA,
      this.posX > 4.5 && this.posX <= 5 && this.posY > 10.2 && this.posY < 10.8 && this.dirX > 0.5,
      5,
      10,
      this.texEnum.TV1S
    );
    if (passageChanged) {
      return;
    }

    passageChanged = this.checkPassage(
      oldPassage,
      PassageTypeEnum.CONTACT,
      this.posX > 4.2 && this.posX < 4.8 && this.posY > 9 && this.posY <= 9.5 && this.dirY < -0.5,
      4,
      8,
      this.texEnum.TV1S
    );
    if (passageChanged) {
      return;
    }

    passageChanged = this.checkPassage(
      oldPassage,
      PassageTypeEnum.ADVENTURE,
      this.posX >= 1 && this.posX < 1.5 && this.posY > 1.2 && this.posY < 1.8 && this.dirX < -0.5,
      0,
      1,
      this.texEnum.PORTAL1
    );
    if (passageChanged) {
      return;
    }

    this.currentPassage = PassageTypeEnum.NONE;
    if (oldPassage !== PassageTypeEnum.NONE) {
      this.worldMap[0][9].tex0 = this.texEnum.TV1;
      this.worldMap[2][11].tex0 = this.texEnum.TV1;
      this.worldMap[5][10].tex0 = this.texEnum.TV1;
      this.worldMap[4][8].tex0 = this.texEnum.TV1;
      this.canNavigate.next(PassageTypeEnum.NONE);
    }
  };
}
