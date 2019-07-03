import { FileService } from './../services/file.service';
import { Game } from './../interfaces/game';
import { ConsolesService } from './../services/consoles.service';
import { GamesService } from './../services/games.service';
import { Console } from './../interfaces/console';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  console: Console;
  games$: Observable<Game[]>;
  gameCovers: string[];

  constructor(private route: ActivatedRoute, public gamesService: GamesService, public consolesService: ConsolesService, public file: FileService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.console = this.consolesService.getConsole(params['console']);
      this.getGames();
    });
  }

  private async getGames(): Promise<void> {
    this.games$ = await this.gamesService.getGames(this.console);
    this.getGameCovers();
  }

  private async getGameCovers(): Promise<void> {
    this.games$.subscribe(async games => {
      this.gameCovers = await this.gamesService.getGameCovers(this.console, games);
    });
  }

  private getGameCover(game: Game): string {
    return this.gameCovers[game._id];
  }

}
