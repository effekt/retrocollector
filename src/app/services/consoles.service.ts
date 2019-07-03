import { Game } from './../interfaces/game';
import { FileService } from './file.service';
import { Console } from './../interfaces/console';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  consoles: Console[] = [
    { "name": "Nintendo Entertainment System (NES)", "short": "nes", "company": "Nintendo", "year": 1980, "collectCount": 0, "selected": [], "gameCount": 677 },
    { "name": "Super Nintendo (SNES)", "short": "snes", "company": "Nintendo", "year": 1980, "collectCount": 0, "selected": [], "gameCount": 715 },
    { "name": "Nintendo 64 (N64)", "short": "n64", "company": "Nintendo", "year": 1980, "collectCount": 0, "selected": [], "gameCount": 296 },
    { "name": "Sega Genesis", "short": "genesis", "company": "Sega", "year": 1980, "collectCount": 0, "selected": [], "gameCount": 720 },
    { "name": "Sega Master System", "short": "mastersystem", "company": "Sega", "year": 1980, "collectCount": 0, "selected": [], "gameCount": 104 },
  ]

  constructor(private file: FileService, private storage: Storage) {
    this.initStorage()
    this.updateCounts();
  }

  private async initStorage() {
    const keys = await this.storage.keys();
    this.consoles.forEach(async c => {
      if (!keys.includes(`${c.short}Count`)) {
        await this.storage.set(`${c.short}Count`, 0);
      }
      if (!keys.includes(`${c.short}Selected`)) {
        await this.storage.set(`${c.short}Selected`, []);
      }
    })
  }

  private async updateCounts() {
    this.consoles.forEach(async c => {
      await this.storage.get(`${c.short}Count`).then(count => {
        c.collectCount = count;
      })
      await this.storage.get(`${c.short}Selected`).then(selected => {
        c.selected = selected;
      })
    })
  }

  public async addGameToSelected(cons: Console, game: Game): Promise<void> {
    cons.selected.push(game._id);
    cons.collectCount++;
    await this.storage.set(`${cons.short}Selected`, cons.selected);
    await this.storage.set(`${cons.short}Count`, cons.collectCount);
  }

  public async removeGameFromSelected(cons: Console, game: Game): Promise<void> {
    cons.selected.splice(cons.selected.indexOf(game._id), 1);
    cons.collectCount--;
    await this.storage.set(`${cons.short}Selected`, cons.selected);
    await this.storage.set(`${cons.short}Count`, cons.collectCount);
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
