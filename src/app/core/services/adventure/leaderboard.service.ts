import { Injectable } from '@angular/core';
import { ILevelRanking } from '../../../shared/models/interfaces/levelranking.interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  private levelRankings: ILevelRanking[] = [];

  constructor(private http: HttpClient) {}

  public getLevelRankings = (): Observable<ILevelRanking[]> => {
    return this.http.get<ILevelRanking[]>(`${environment.backend}/level-rankings/`);
  };

  public getLevelRanking = (id: string): Observable<ILevelRanking> => {
    return this.http.get<ILevelRanking>(`${environment.backend}/level-rankings/${id}`);
  };

  public addLevelRanking = (ranking: ILevelRanking): Observable<ILevelRanking> => {
    return this.http.post<ILevelRanking>(`${environment.backend}/level-rankings/`, ranking);
  };
}
