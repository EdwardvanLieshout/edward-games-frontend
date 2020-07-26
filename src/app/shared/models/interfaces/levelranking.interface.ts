import { IReplay } from './replay.interface';

export interface ILevelRanking {
  id?: string;
  levelNr: string;
  name: string;
  time?: string;
  replay: IReplay;
}
