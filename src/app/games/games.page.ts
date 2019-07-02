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
  games$: Observable<Game[]>

  constructor(private route: ActivatedRoute, public gamesService: GamesService, public consolesService: ConsolesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.console = this.consolesService.getConsole(params['console']);
      this.games$ = this.gamesService.getGames(this.console);
  });
  }

}
