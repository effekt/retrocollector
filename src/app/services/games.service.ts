import { FileService } from './file.service';
import { ConsolesService } from './consoles.service';
import { Console } from './../interfaces/console';
import { File } from '@ionic-native/file/ngx';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private file: File, private consoleService: ConsolesService, private http: HttpClient, private fileService: FileService) { }

  public async getGames(cons: Console): Promise<Observable<Game[]>> {
    let fileExists = await this.fileService.checkFile([], `${cons.short}.json`);
    return fileExists ? this.http.get<Game[]>(`${this.file.dataDirectory}/${cons.short}.json`) : this.http.get<Game[]>(`/assets/games/${cons.short}.json`);
  }

  public async getGameCovers(cons: Console, games: Game[]): Promise<string[]> {
    return Promise.all(games.map(game =>
      this.checkCover(cons, game)
    ));
  }

  private async checkCover(cons: Console, game: Game) {
    const fileExistsStorage = await this.fileService.checkFile(['covers', cons.short], `${game.name}.jpg`);
    return fileExistsStorage ? `${this.file.dataDirectory}/covers/${cons.short}/${game.name}.jpg` : `/assets/images/covers/${cons.short}/${game.name}.jpg`;
  }
}
