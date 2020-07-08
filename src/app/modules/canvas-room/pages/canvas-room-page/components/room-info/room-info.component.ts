import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Self, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { MapService } from '../../../../../../core/services/map.service';
import { RoomTypeEnum } from '../../../../../../shared/models/enums/roomType.enum';
import { OnDestroyService } from '../../../../../../core/services/on-destroy.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OnDestroyService],
})
export class RoomInfoComponent implements OnInit {
  public titleText = '';
  public content = '';

  public roomTypeEnum: RoomTypeEnum;
  public infoDictionary = {
    'Main Zone': {
      title: 'Welcome to the main zone!',
      content: 'Walk around using the arrow keys to explore the surrounding areas.',
    },
    'Authors Room': {
      title: 'Edward van Lieshout',
      content: 'In this room you can find more info about Edward van Lieshout, the maker of this website.',
    },
    'Adventure Gate': {
      title: 'W.I.P.',
      content: 'This area is under construction for now. Please come back later',
    },
    'Hall of Gadgets': {
      title: 'W.I.P.',
      content: 'This area is under construction for now. Please come back later',
    },
    'Social Area': {
      title: 'W.I.P.',
      content: 'This area is under construction for now. Please come back later',
    },
  };

  public events: Observable<void>;

  constructor(
    public mapService: MapService,
    public ref: ChangeDetectorRef,
    @Self()
    @Optional()
    private onDestroyService: OnDestroyService
  ) {}

  public ngOnInit(): void {
    this.events = this.mapService.getPositionEvents();
    this.events.pipe(takeUntil(this.onDestroyService)).subscribe(() => this.performTick());
    this.performTick();
  }

  public performTick = (): void => {
    this.titleText = this.infoDictionary[this.mapService.getRoom()].title;
    this.content = this.infoDictionary[this.mapService.getRoom()].content;
    this.ref.markForCheck();
  };
}
