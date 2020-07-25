import { Injectable } from '@angular/core';
import { ILevelRanking } from '../../../shared/models/interfaces/levelranking.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  private levelRankings: ILevelRanking[] = [];

  public getLevelRankings = (levelNr: string, mode: string): Observable<ILevelRanking[]> => {
    const rankings = [...this.levelRankings];
    if (mode === 'Normal') {
      return of(rankings.filter((r) => !r.replay.collector && !r.replay.pacifist).filter((r) => r.levelNr === levelNr));
    }
    if (mode === 'Collector') {
      return of(rankings.filter((r) => r.replay.collector && !r.replay.pacifist).filter((r) => r.levelNr === levelNr));
    }
    if (mode === 'Pacifist') {
      return of(rankings.filter((r) => r.replay.pacifist).filter((r) => r.levelNr === levelNr));
    }
    return of(rankings.filter((r) => r.levelNr === levelNr));
  };

  public getLevelRanking = (id: string): ILevelRanking => {
    return this.levelRankings.find((lr) => lr.id === id);
  };

  public addLevelRanking = (levelNr: string, ranking: ILevelRanking): void => {
    ranking.id = this.levelRankings.length.toString();
    this.levelRankings.push(ranking);
  };
}
