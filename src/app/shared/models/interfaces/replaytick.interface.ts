import { DirTypeEnum } from '../enums/direction.enum';

export interface IReplayTick {
  bufferedDir: DirTypeEnum;
  punchBuffer: boolean;
  movementBuffer: boolean;
  jumpBuffer: boolean;
  cancelBuffer: boolean;
  stopBuffer: boolean;
}
