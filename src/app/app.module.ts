import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NbaHomeComponent } from './nba-home/nba-home.component';
import { NbaPlayerComponent } from './nba-player/nba-player.component';
import { NbaService } from './services/nba-service.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NbaHomeComponent,
    NbaPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NbaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
