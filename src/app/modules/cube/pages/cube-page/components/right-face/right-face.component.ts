import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-right-face',
  templateUrl: './right-face.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightFaceComponent {
  @Output()
  public disco: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public normal: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public grid: EventEmitter<void> = new EventEmitter<void>();

  public emitDisco = (): void => {
    this.disco.emit();
  };

  public emitNormal = (): void => {
    this.normal.emit();
  };

  public emitGrid = (): void => {
    this.grid.emit();
  };
}
