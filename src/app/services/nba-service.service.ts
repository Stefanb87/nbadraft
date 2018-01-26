import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NbaService {

  constructor(private http: Http) { }

  getPlayers() {
    return this.http.get('https://stats.nba.com/stats/drafthistory?LeagueID=00')
    .map(
      (response: Response) => {
        const res = response.json();
        return res;
      }
    );
  }

  getProfile(id) {
    return this.http.get('https://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=' + id)
    .map(
      (response: Response) => {
        const p = response.json();
        return p;
      }
    );
  }
}
