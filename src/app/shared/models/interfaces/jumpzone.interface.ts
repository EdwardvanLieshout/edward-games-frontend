import { IBlock } from './block.interface';
import { IDrawable } from './drawable.interface';
import { AvailabilityTypeEnum } from '../enums/availabilityType.enum';

export interface IJumpzone {
  area: IBlock;
  availability: AvailabilityTypeEnum;
  drawables: IDrawable[];
  animationCounter: number;
}
