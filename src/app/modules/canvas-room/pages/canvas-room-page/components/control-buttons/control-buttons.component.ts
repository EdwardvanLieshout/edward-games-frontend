import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlButtonsComponent {
  @Output()
  public startMoveUp: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public startMoveDown: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public startMoveLeft: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public startMoveRight: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public stopMoveUp: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public stopMoveDown: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public stopMoveLeft: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public stopMoveRight: EventEmitter<void> = new EventEmitter<void>();

  public onStartMovingUp = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveUp.emit();
  };

  public onStartMovingDown = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveDown.emit();
  };

  public onStartMovingLeft = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveLeft.emit();
  };

  public onStartMovingRight = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveRight.emit();
  };

  public onStopMovingUp = (): void => {
    this.stopMoveUp.emit();
  };

  public onStopMovingDown = (): void => {
    this.stopMoveDown.emit();
  };

  public onStopMovingLeft = (): void => {
    this.stopMoveLeft.emit();
  };

  public onStopMovingRight = (): void => {
    this.stopMoveRight.emit();
  };
}
