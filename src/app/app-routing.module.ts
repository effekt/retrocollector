import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' }, 
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  /*{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'consoles', loadChildren: './consoles/consoles.module#ConsolesPageModule' },
  { path: 'games', loadChildren: './games/games.module#GamesPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
