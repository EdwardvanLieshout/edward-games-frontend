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

  public moving = false;

  public onStartMovingUp = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveUp.emit();
    this.moving = true;
  };

  public onStartMovingDown = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveDown.emit();
    this.moving = true;
  };

  public onStartMovingLeft = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveLeft.emit();
    this.moving = true;
  };

  public onStartMovingRight = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveRight.emit();
    this.moving = true;
  };

  public onStopMovingUp = (): void => {
    this.stopMoveUp.emit();
    this.moving = false;
  };

  public onStopMovingDown = (): void => {
    this.stopMoveDown.emit();
    this.moving = false;
  };

  public onStopMovingLeft = (): void => {
    this.stopMoveLeft.emit();
    this.moving = false;
  };

  public onStopMovingRight = (): void => {
    this.stopMoveRight.emit();
    this.moving = false;
  };

  public onChangeMovingUp = (event?: Event): void => {
    if (this.moving) {
      if (event) {
        event.preventDefault();
      }
      this.startMoveUp.emit();
      this.stopMoveLeft.emit();
      this.stopMoveRight.emit();
      this.stopMoveDown.emit();
    }
  };

  public onChangeMovingDown = (event?: Event): void => {
    if (this.moving) {
      if (event) {
        event.preventDefault();
      }
      this.startMoveDown.emit();
      this.stopMoveLeft.emit();
      this.stopMoveRight.emit();
      this.stopMoveUp.emit();
    }
  };

  public onChangeMovingRight = (event?: Event): void => {
    if (this.moving) {
      if (event) {
        event.preventDefault();
      }
      this.startMoveRight.emit();
      this.stopMoveLeft.emit();
      this.stopMoveUp.emit();
      this.stopMoveDown.emit();
    }
  };

  public onChangeMovingLeft = (event?: Event): void => {
    if (this.moving) {
      if (event) {
        event.preventDefault();
      }
      this.startMoveLeft.emit();
      this.stopMoveUp.emit();
      this.stopMoveRight.emit();
      this.stopMoveDown.emit();
    }
  };

  public onChangeCancel = (event?: Event): void => {
    if (this.moving) {
      if (event) {
        event.preventDefault();
      }
      this.stopMoveLeft.emit();
      this.stopMoveUp.emit();
      this.stopMoveRight.emit();
      this.stopMoveDown.emit();
    }
  };
}
