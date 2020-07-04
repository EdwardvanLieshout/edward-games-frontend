import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-canvas-room-page',
  templateUrl: './canvas-room-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasRoomPageComponent {}
