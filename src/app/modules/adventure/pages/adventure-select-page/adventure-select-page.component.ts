import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adventure-select-page',
  templateUrl: './adventure-select-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventureSelectPageComponent {
  public levelNr = 1;

  constructor(private router: Router) {}

  public onChangeLevel = (level: number): void => {
    this.levelNr = level;
  };

  public startLevel = (): void => {
    this.router.navigate(['adventure/level', this.levelNr]);
  };

  public viewLeaderBoards = (): void => {
    this.router.navigate(['adventure/leaderboards', this.levelNr]);
  };
}
