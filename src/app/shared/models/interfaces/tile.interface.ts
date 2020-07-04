import { TileTypeEnum } from '../enums/tileType.enum';
import { TextureTypeEnum } from '../enums/textureType.enum';
import { RoomTypeEnum } from '../enums/roomType.enum';

export interface ITile {
  tileType: TileTypeEnum;
  tex0: TextureTypeEnum;
  tex1?: TextureTypeEnum;
  room?: RoomTypeEnum;
}
