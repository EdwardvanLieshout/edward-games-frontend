import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MapService } from '../../../../../../core/services/map.service';
import { TileTypeEnum } from '../../../../../../shared/models/enums/tileType.enum';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapViewComponent implements OnInit, OnDestroy {


  public SCREEN_WIDTH = 150;
  public SCREEN_HEIGHT = 150;

  private eventsSubscription: Subscription;

  @Input() events: Observable<void>;

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  constructor(public mapService: MapService) {}

  public ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.eventsSubscription = this.events.subscribe(() => this.performTick());
  }

  public ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }

  public performTick = (): void => {
    for (let x = 0; x < this.mapService.MAP_WIDTH; x++) {
      for (let y = 0; y < this.mapService.MAP_HEIGHT; y++) {
        if (this.mapService.getMap()[y][x].tileType === TileTypeEnum.FLOOR) {
          this.ctx.fillStyle = 'rgb(100, 100, 100)';
        }
        else {
          this.ctx.fillStyle = 'rgb(200, 200, 200)';
        }
        this.ctx.fillRect(
          x * this.SCREEN_WIDTH / this.mapService.MAP_WIDTH,
          y * this.SCREEN_HEIGHT / this.mapService.MAP_HEIGHT,
          this.SCREEN_WIDTH / this.mapService.MAP_WIDTH,
          this.SCREEN_HEIGHT / this.mapService.MAP_HEIGHT,
        );
      }
    }
    this.ctx.fillStyle = 'rgb(140, 200, 255)';
    this.ctx.fillRect(
      this.mapService.getPosY() * this.SCREEN_HEIGHT / this.mapService.MAP_HEIGHT - 1,
      this.mapService.getPosX() * this.SCREEN_WIDTH / this.mapService.MAP_WIDTH - 1,
      3,
      3
    );
  }
}
