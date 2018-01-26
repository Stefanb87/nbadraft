import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NbaHomeComponent } from './nba-home/nba-home.component';
import { NbaPlayerComponent } from './nba-player/nba-player.component';
import { NbaService } from './services/nba-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NbaHomeComponent,
    NbaPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: NbaHomeComponent },
      { path: 'profile/:id', component: NbaPlayerComponent },
      { path: '**', component: NbaHomeComponent }
    ])
  ],
  providers: [NbaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
