import { Console } from './../interfaces/console';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  consoles: Console[] = [
    { "name": "Nintendo Entertainment System (NES)", "short": "nes", "company": "Nintendo", "year": 1980, "collectCount": 0, "gameCount": 0 },
    { "name": "Super Nintendo (SNES)", "short": "snes", "company": "Nintendo", "year": 1980, "collectCount": 0, "gameCount": 0 },
    { "name": "Nintendo 64 (N64)", "short": "n64", "company": "Nintendo", "year": 1980, "collectCount": 0, "gameCount": 0 },
    { "name": "Sega Genesis", "short": "genesis", "company": "Sega", "year": 1980, "collectCount": 0, "gameCount": 0 },
  ]

  constructor(private file: File) {
    console.log(this.file.dataDirectory);
  }

  public getConsole(console: string): Console {
    return this.consoles.find(c => c.short === console);
  }

  public getConsoles(company?: string): Console[] {
    return company ? this.consoles.filter(c => c.company === company) : this.consoles;
  }

  public getCompanies(): string[] {
    return Array.from(new Set(this.consoles.map(c => c.company)));
  }
}
