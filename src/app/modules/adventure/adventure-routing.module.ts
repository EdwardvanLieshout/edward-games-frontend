import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdventureMenuPageComponent } from './pages/adventure-menu-page/adventure-menu-page.component';
import { AdventureSelectPageComponent } from './pages/adventure-select-page/adventure-select-page.component';
import { AdventureLevelPageComponent } from './pages/adventure-level-page/adventure-level-page.component';
import { GameOverPageComponent } from './pages/game-over-page/game-over-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdventureMenuPageComponent,
  },
  {
    path: 'select',
    component: AdventureSelectPageComponent,
  },
  {
    path: 'level/:levelNr',
    component: AdventureLevelPageComponent,
  },
  {
    path: 'rip/:levelNr',
    component: GameOverPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventureRoutingModule {}
