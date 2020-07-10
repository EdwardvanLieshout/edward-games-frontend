import { Component, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('left', { static: true })
  public left: ElementRef<HTMLButtonElement>;
  @ViewChild('up', { static: true })
  public up: ElementRef<HTMLButtonElement>;
  @ViewChild('cancel', { static: true })
  public cancel: ElementRef<HTMLButtonElement>;
  @ViewChild('down', { static: true })
  public down: ElementRef<HTMLButtonElement>;
  @ViewChild('right', { static: true })
  public right: ElementRef<HTMLButtonElement>;

  public moving = false;

  public onStartMovingUp = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveUp.emit();
    this.moving = true;
    this.up.nativeElement.classList.add('e-button__control--active');
  };

  public onStartMovingDown = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveDown.emit();
    this.moving = true;
    this.down.nativeElement.classList.add('e-button__control--active');
  };

  public onStartMovingLeft = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveLeft.emit();
    this.moving = true;
    this.left.nativeElement.classList.add('e-button__control--active');
  };

  public onStartMovingRight = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.startMoveRight.emit();
    this.moving = true;
    this.right.nativeElement.classList.add('e-button__control--active');
  };

  public onStopMovingUp = (): void => {
    this.stopMoveUp.emit();
    this.moving = false;
    this.right.nativeElement.classList.remove('e-button__control--active');
    this.up.nativeElement.classList.remove('e-button__control--active');
    this.down.nativeElement.classList.remove('e-button__control--active');
    this.left.nativeElement.classList.remove('e-button__control--active');
    this.cancel.nativeElement.classList.remove('e-button__control--active');
  };

  public onStopMovingDown = (): void => {
    this.stopMoveDown.emit();
    this.moving = false;
    this.right.nativeElement.classList.remove('e-button__control--active');
    this.up.nativeElement.classList.remove('e-button__control--active');
    this.down.nativeElement.classList.remove('e-button__control--active');
    this.left.nativeElement.classList.remove('e-button__control--active');
    this.cancel.nativeElement.classList.remove('e-button__control--active');
  };

  public onStopMovingLeft = (): void => {
    this.stopMoveLeft.emit();
    this.moving = false;
    this.right.nativeElement.classList.remove('e-button__control--active');
    this.up.nativeElement.classList.remove('e-button__control--active');
    this.down.nativeElement.classList.remove('e-button__control--active');
    this.left.nativeElement.classList.remove('e-button__control--active');
    this.cancel.nativeElement.classList.remove('e-button__control--active');
  };

  public onStopMovingRight = (): void => {
    this.stopMoveRight.emit();
    this.moving = false;
    this.right.nativeElement.classList.remove('e-button__control--active');
    this.up.nativeElement.classList.remove('e-button__control--active');
    this.down.nativeElement.classList.remove('e-button__control--active');
    this.left.nativeElement.classList.remove('e-button__control--active');
    this.cancel.nativeElement.classList.remove('e-button__control--active');
  };

  public onChangeMovingUp = (event?: Event): void => {
    if (this.moving) {
      if (!this.up.nativeElement.classList.contains('e-button__control--active')) {
        this.up.nativeElement.classList.add('e-button__control--active');
      }
      this.right.nativeElement.classList.remove('e-button__control--active');
      this.left.nativeElement.classList.remove('e-button__control--active');
      this.down.nativeElement.classList.remove('e-button__control--active');
      this.cancel.nativeElement.classList.remove('e-button__control--active');
      this.startMoveUp.emit();
      this.stopMoveLeft.emit();
      this.stopMoveRight.emit();
      this.stopMoveDown.emit();
    }
  };

  public onChangeMovingDown = (event?: Event): void => {
    if (this.moving) {
      if (!this.down.nativeElement.classList.contains('e-button__control--active')) {
        this.down.nativeElement.classList.add('e-button__control--active');
      }
      this.right.nativeElement.classList.remove('e-button__control--active');
      this.up.nativeElement.classList.remove('e-button__control--active');
      this.left.nativeElement.classList.remove('e-button__control--active');
      this.cancel.nativeElement.classList.remove('e-button__control--active');
      this.startMoveDown.emit();
      this.stopMoveLeft.emit();
      this.stopMoveRight.emit();
      this.stopMoveUp.emit();
    }
  };

  public onChangeMovingRight = (event?: Event): void => {
    if (this.moving) {
      if (!this.right.nativeElement.classList.contains('e-button__control--active')) {
        this.right.nativeElement.classList.add('e-button__control--active');
      }
      this.left.nativeElement.classList.remove('e-button__control--active');
      this.up.nativeElement.classList.remove('e-button__control--active');
      this.down.nativeElement.classList.remove('e-button__control--active');
      this.cancel.nativeElement.classList.remove('e-button__control--active');
      this.startMoveRight.emit();
      this.stopMoveLeft.emit();
      this.stopMoveUp.emit();
      this.stopMoveDown.emit();
    }
  };

  public onChangeMovingLeft = (event?: Event): void => {
    if (this.moving) {
      if (!this.left.nativeElement.classList.contains('e-button__control--active')) {
        this.left.nativeElement.classList.add('e-button__control--active');
      }
      this.right.nativeElement.classList.remove('e-button__control--active');
      this.up.nativeElement.classList.remove('e-button__control--active');
      this.down.nativeElement.classList.remove('e-button__control--active');
      this.cancel.nativeElement.classList.remove('e-button__control--active');
      this.startMoveLeft.emit();
      this.stopMoveUp.emit();
      this.stopMoveRight.emit();
      this.stopMoveDown.emit();
    }
  };

  public onChangeCancel = (event?: Event): void => {
    if (this.moving) {
      if (!this.cancel.nativeElement.classList.contains('e-button__control--active')) {
        this.cancel.nativeElement.classList.add('e-button__control--active');
      }
      this.right.nativeElement.classList.remove('e-button__control--active');
      this.up.nativeElement.classList.remove('e-button__control--active');
      this.down.nativeElement.classList.remove('e-button__control--active');
      this.left.nativeElement.classList.remove('e-button__control--active');
      this.stopMoveLeft.emit();
      this.stopMoveUp.emit();
      this.stopMoveRight.emit();
      this.stopMoveDown.emit();
    }
  };

  public onStartCancel = (): void => {
    this.moving = true;
  };

  public onTouchMove = (event: TouchEvent): void => {
    event.preventDefault();
    if (this.moving) {
      const touch = event.touches[0];

      const elementFromPoint = document.elementFromPoint(
        touch.pageX - window.pageXOffset,
        touch.pageY - window.pageYOffset
      );

      if (this.left.nativeElement === elementFromPoint) {
        this.onChangeMovingLeft();
      }
      if (this.up.nativeElement === elementFromPoint) {
        this.onChangeMovingUp();
      }
      if (this.cancel.nativeElement === elementFromPoint) {
        this.onChangeCancel();
      }
      if (this.down.nativeElement === elementFromPoint) {
        this.onChangeMovingDown();
      }
      if (this.right.nativeElement === elementFromPoint) {
        this.onChangeMovingRight();
      }
    }
  };
}
