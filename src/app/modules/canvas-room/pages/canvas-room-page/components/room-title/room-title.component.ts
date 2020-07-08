import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Self, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { MapService } from '../../../../../../core/services/map.service';
import { OnDestroyService } from '../../../../../../core/services/on-destroy.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-room-title',
  templateUrl: './room-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OnDestroyService],
})
export class RoomTitleComponent implements OnInit {
  public titleText = '';

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
    this.titleText = this.mapService.getRoom();
    this.ref.markForCheck();
  };
}
