import { ConsolesService } from './consoles.service';
import { Console } from './../interfaces/console';
import { File } from '@ionic-native/file/ngx';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private file: File, private consoleService: ConsolesService, private http: HttpClient) { }

  public getGames(console: Console): Observable<Game[]> {
    return this.file.checkFile(this.file.dataDirectory, `${console.short}.json`) ? this.http.get<Game[]>(`${this.file.dataDirectory}/${console.short}.json`) : this.http.get<Game[]>(`/assets/games/${console.short}.json`);
  }
}
