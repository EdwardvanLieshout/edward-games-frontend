import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MapService } from '../../../../../../core/services/map.service';

@Component({
  selector: 'app-room-title',
  templateUrl: './room-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomTitleComponent implements OnInit, OnDestroy {
  private eventsSubscription: Subscription;

  public titleText = '';

  public events: Observable<void>;

  constructor(public mapService: MapService, public ref: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.events = this.mapService.getPositionEvents();
    this.eventsSubscription = this.events.subscribe(() => this.performTick());
    this.performTick();
  }

  public ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }

  public performTick = (): void => {
    this.titleText = this.mapService.getRoom();
    this.ref.markForCheck();
  };
}
