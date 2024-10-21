import { Component, OnInit } from '@angular/core';
import { BuilderCameraService } from '../../../../../../core/services/adventure-builder/builder-camera.service';

@Component({
  selector: 'app-builder-movement',
  templateUrl: './builder-movement.component.html',
})
export class BuilderMovementComponent implements OnInit {
  constructor(private camera: BuilderCameraService) {}

  ngOnInit(): void {}

  public moving = false;

  public onStartMovingUp = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.camera.up = true;
    this.camera.down = false;
    this.camera.moving = true;
  };

  public onStartMovingDown = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.camera.up = false;
    this.camera.down = true;
    this.camera.moving = true;
  };

  public onStartMovingLeft = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.camera.left = true;
    this.camera.right = false;
    this.camera.moving = true;
  };

  public onStartMovingRight = (event?: Event): void => {
    if (event) {
      event.preventDefault();
    }
    this.camera.left = false;
    this.camera.right = true;
    this.camera.moving = true;
  };

  public onStopMovingUp = (): void => {
    this.camera.up = false;
    this.camera.moving = !this.hasStoppedMoving();
  };

  public onStopMovingDown = (): void => {
    this.camera.down = false;
    this.camera.moving = !this.hasStoppedMoving();
  };

  public onStopMovingLeft = (): void => {
    this.camera.left = false;
    this.camera.moving = !this.hasStoppedMoving();
  };

  public onStopMovingRight = (): void => {
    this.camera.right = false;
    this.camera.moving = !this.hasStoppedMoving();
  };

  private hasStoppedMoving = (): boolean => {
    return !this.camera.right && !this.camera.left && !this.camera.up && !this.camera.down;
  };
}
