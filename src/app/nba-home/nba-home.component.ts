import { NbaService } from './../services/nba-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-home',
  templateUrl: './nba-home.component.html',
  styleUrls: ['./nba-home.component.css']
})
export class NbaHomeComponent implements OnInit {

  players: any[] = [];
  header: any[] = [];

  constructor(private nbaService: NbaService) {
  }

  ngOnInit() {
   this.nbaService.getPlayers().subscribe(data => {
                                  this.players = data.resultSets[0].rowSet.slice(0, 20);
                                  this.header = data.resultSets[0].headers;
                                });
  }

}
