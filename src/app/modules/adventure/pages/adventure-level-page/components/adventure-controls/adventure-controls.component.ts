import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PlayerService } from '../../../../../../core/services/adventure/player.service';
import { DirTypeEnum } from '../../../../../../shared/models/enums/direction.enum';
import { ActionTypeEnum } from '../../../../../../shared/models/enums/action.enum';

@Component({
  selector: 'app-adventure-controls',
  templateUrl: './adventure-controls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventureControlsComponent {
  private movingRight = false;
  private movingLeft = false;
  private jumping = false;
  private cancel = false;

  constructor(private playerService: PlayerService) {}

  public onStartMovingRight = (): void => {
    this.playerService.setBufferedDir(DirTypeEnum.RIGHT);
    this.playerService.bufferMovement();
    this.movingRight = true;
  };

  public onStartMovingLeft = (): void => {
    this.playerService.setBufferedDir(DirTypeEnum.LEFT);
    this.playerService.bufferMovement();
    this.movingLeft = true;
  };

  public onStopMovingRight = (): void => {
    this.movingRight = false;
    if (!this.movingLeft) {
      this.playerService.bufferStop();
    } else {
      this.playerService.setBufferedDir(DirTypeEnum.LEFT);
    }
  };

  public onStopMovingLeft = (): void => {
    this.movingLeft = false;
    if (!this.movingRight) {
      this.playerService.bufferStop();
    } else {
      this.playerService.setBufferedDir(DirTypeEnum.RIGHT);
    }
  };

  public onStartJumping = (): void => {
    if (!this.jumping) {
      if (this.playerService.getCanJump()) {
        this.playerService.bufferJump();
      }
      this.jumping = true;
    }
  };

  public onStopJumping = (): void => {
    this.jumping = false;
  };

  public onStartCancel = (): void => {
    if (!this.cancel) {
      if (this.playerService.getCanCancel()) {
        this.playerService.bufferCancel();
        this.cancel = true;
      }
    }
  };

  public onStopCancel = (): void => {
    this.cancel = false;
  };

  public onStartPunch = (): void => {
    this.playerService.bufferPunch(true);
  };

  public onStopPunch = (): void => {
    this.playerService.bufferPunch(false);
  };
}
