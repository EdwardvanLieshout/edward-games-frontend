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
      { tileType: this.tileEnum.WALL, tex0: this.texEnum.HILLS },
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

  public moveForward = (): void => {
    if (
      !this.getMap()[Math.trunc(this.getPosX() + this.getDirX() * this.moveSpeed)][Math.trunc(this.getPosY())].tileType
    ) {
      this.setPosX(this.getPosX() + this.getDirX() * this.moveSpeed);
    }
    if (
      !this.getMap()[Math.trunc(this.getPosX())][Math.trunc(this.getPosY() + this.getDirY() * this.moveSpeed)].tileType
    ) {
      this.setPosY(this.getPosY() + this.getDirY() * this.moveSpeed);
    }
    this.mapUpdated.next();
    this.checkScreens();
  };

  public moveBackward = (): void => {
    if (
      !this.getMap()[Math.trunc(this.getPosX() - this.getDirX() * this.moveSpeed)][Math.trunc(this.getPosY())].tileType
    ) {
      this.setPosX(this.getPosX() - this.getDirX() * this.moveSpeed);
    }
    if (
      !this.getMap()[Math.trunc(this.getPosX())][Math.trunc(this.getPosY() - this.getDirY() * this.moveSpeed)].tileType
    ) {
      this.setPosY(this.getPosY() - this.getDirY() * this.moveSpeed);
    }
    this.mapUpdated.next();
    this.checkScreens();
  };

  public rotateRight = (): void => {
    const oldDirX = this.getDirX();
    this.setDirX(this.getDirX() * Math.cos(-this.rotSpeed) - this.getDirY() * Math.sin(-this.rotSpeed));
    this.setDirY(oldDirX * Math.sin(-this.rotSpeed) + this.getDirY() * Math.cos(-this.rotSpeed));
    const oldPlaneX = this.getPlaneX();
    this.setPlaneX(this.getPlaneX() * Math.cos(-this.rotSpeed) - this.getPlaneY() * Math.sin(-this.rotSpeed));
    this.setPlaneY(oldPlaneX * Math.sin(-this.rotSpeed) + this.getPlaneY() * Math.cos(-this.rotSpeed));
    this.mapUpdated.next();
    this.checkScreens();
  };

  public rotateLeft = (): void => {
    const oldDirX = this.getDirX();
    this.setDirX(this.getDirX() * Math.cos(this.rotSpeed) - this.getDirY() * Math.sin(this.rotSpeed));
    this.setDirY(oldDirX * Math.sin(this.rotSpeed) + this.getDirY() * Math.cos(this.rotSpeed));
    const oldPlaneX = this.getPlaneX();
    this.setPlaneX(this.getPlaneX() * Math.cos(this.rotSpeed) - this.getPlaneY() * Math.sin(this.rotSpeed));
    this.setPlaneY(oldPlaneX * Math.sin(this.rotSpeed) + this.getPlaneY() * Math.cos(this.rotSpeed));
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
    y: number
  ): boolean => {
    if (condition) {
      this.currentPassage = newPassage;
      if (oldPassage !== newPassage) {
        this.worldMap[x][y].tex0 = this.texEnum.TV1S;
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
      9
    );
    if (passageChanged) {
      return;
    }

    passageChanged = this.checkPassage(
      oldPassage,
      PassageTypeEnum.EXPERIENCE,
      this.posX > 2.2 && this.posX < 2.8 && this.posY >= 10.5 && this.posY < 11 && this.dirY > 0.5,
      2,
      11
    );
    if (passageChanged) {
      return;
    }

    passageChanged = this.checkPassage(
      oldPassage,
      PassageTypeEnum.MEDIA,
      this.posX > 4.5 && this.posX <= 5 && this.posY > 10.2 && this.posY < 10.8 && this.dirX > 0.5,
      5,
      10
    );
    if (passageChanged) {
      return;
    }

    passageChanged = this.checkPassage(
      oldPassage,
      PassageTypeEnum.CONTACT,
      this.posX > 4.2 && this.posX < 4.8 && this.posY > 9 && this.posY <= 9.5 && this.dirY < -0.5,
      4,
      8
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
