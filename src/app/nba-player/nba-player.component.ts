import { Component, OnInit } from '@angular/core';
import { NbaService } from './../services/nba-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nba-player',
  templateUrl: './nba-player.component.html',
  styleUrls: ['./nba-player.component.css']
})
export class NbaPlayerComponent implements OnInit {

  profileHeaders: any[] = [];
  playerProfile: any[] = [];

  constructor(private nbaService: NbaService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.nbaService.getProfile(id).subscribe(profile => {
                                      this.profileHeaders = profile.resultSets[0].headers;
                                      this.playerProfile = profile.resultSets[0].rowSet[0];
                                    });
    });
  }

}
