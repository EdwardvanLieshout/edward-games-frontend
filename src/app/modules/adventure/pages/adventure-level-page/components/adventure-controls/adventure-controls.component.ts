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
    this.movingRight = true;
    this.playerService.setBufferedDir(DirTypeEnum.RIGHT);
    this.playerService.bufferMovement();
  };

  public onStartMovingLeft = (): void => {
    this.movingLeft = true;
    this.playerService.setBufferedDir(DirTypeEnum.LEFT);
    this.playerService.bufferMovement();
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
}
