import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILevelRanking } from '../../../../shared/models/interfaces/levelranking.interface';
import { Observable } from 'rxjs';
import { LeaderboardService } from '../../../../core/services/adventure/leaderboard.service';
import { PlayerService } from '../../../../core/services/adventure/player.service';
import { IReplay } from '../../../../shared/models/interfaces/replay.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-level-complete',
  templateUrl: './level-complete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelCompleteComponent implements OnInit {
  public levelNr: string;
  public selectedMode = 'Normal';
  public levelRankings: Observable<ILevelRanking[]>;
  public showModal = false;
  public storedReplay: IReplay;
  public form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private leaderboardService: LeaderboardService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.levelNr = this.route.snapshot.paramMap.get('levelNr');
    this.form = this.createForm();
    this.storedReplay = this.playerService.getReplay();
    if (this.storedReplay.isComplete) {
      this.showModal = true;
      if (this.storedReplay.collector) {
        this.selectedMode = 'Collector';
      }
      if (this.storedReplay.pacifist) {
        this.selectedMode = 'Pacifist';
      }
    }
    this.levelRankings = this.leaderboardService.getLevelRankings(this.levelNr, this.selectedMode);
  }

  public onChangeMode = (mode: string): void => {
    this.selectedMode = mode;
    this.levelRankings = this.leaderboardService.getLevelRankings(this.levelNr, this.selectedMode);
  };

  public watchReplay = (id: string): void => {
    this.router.navigate(['adventure/replay', id]);
  };

  public onSubmit = (): void => {
    this.leaderboardService.addLevelRanking(this.levelNr, {
      id: '',
      levelNr: this.levelNr,
      name: this.form.controls.name.value,
      time: this.getTimeString(this.storedReplay.ticks.length * 35),
      replay: this.storedReplay,
    });
    this.showModal = false;
    this.playerService.setUp();
    this.levelRankings = this.leaderboardService.getLevelRankings(this.levelNr, this.selectedMode);
  };

  public getTimeString = (timerValue: number): string => {
    const milliseconds = timerValue % 1000;
    const seconds = Math.round((timerValue - milliseconds) / 1000) % 60;
    const minutes = Math.round(((timerValue - milliseconds) / 1000 - seconds) / 60);
    const minutesString = minutes < 100 ? ('0' + minutes).slice(-2) : minutes;
    const timestring = minutesString + ':' + ('0' + seconds).slice(-2) + ':' + ('00' + milliseconds).slice(-3);
    return timestring;
  };

  public closeModal = (): void => {
    this.showModal = false;
    this.playerService.setUp();
  };

  private createForm = (): FormGroup => {
    return new FormGroup({
      name: new FormControl('', Validators.maxLength(30)),
    });
  };
}
