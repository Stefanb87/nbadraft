import { NbaService } from './../services/nba-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-home',
  templateUrl: './nba-home.component.html',
  styleUrls: ['./nba-home.component.css']
})
export class NbaHomeComponent implements OnInit {

  constructor(private nbaService: NbaService) { }

  ngOnInit() {
   this.nbaService.getPlayers().subscribe(players => {
     console.log(players.json());
   });
  }

}
