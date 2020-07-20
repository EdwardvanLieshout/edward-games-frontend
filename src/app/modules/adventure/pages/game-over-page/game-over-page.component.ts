import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-over-page',
  templateUrl: './game-over-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameOverPageComponent implements OnInit {
  public levelNr = '1';

  constructor(private router: Router, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.levelNr = this.route.snapshot.paramMap.get('levelNr');
  }

  public startLevel = (): void => {
    this.router.navigate(['adventure/level', this.levelNr]);
  };

  public back = (): void => {
    this.router.navigate(['adventure/select']);
  };
}
