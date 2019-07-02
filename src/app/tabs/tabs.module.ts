import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  { 
    path: '', 
    component: TabsPage,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'consoles' },
      { path: 'consoles', children: [
        { path: '', loadChildren: '../consoles/consoles.module#ConsolesPageModule', pathMatch: 'full' },
        { path: ':console', loadChildren: '../games/games.module#GamesPageModule' }
      ] }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
