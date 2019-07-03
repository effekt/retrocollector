import { ConsolesService } from './../services/consoles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.page.html',
  styleUrls: ['./consoles.page.scss'],
})
export class ConsolesPage implements OnInit {

  constructor(public consolesService: ConsolesService) { }

  ngOnInit() {
  }

}
