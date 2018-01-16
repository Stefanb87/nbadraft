import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NbaService {

  constructor(private http: Http) { }

  getPlayers() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
