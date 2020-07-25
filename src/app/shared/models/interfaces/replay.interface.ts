import { IReplayTick } from './replaytick.interface';

export interface IReplay {
  isComplete: boolean;
  collector: boolean;
  pacifist: boolean;
  ticks: IReplayTick[];
}
