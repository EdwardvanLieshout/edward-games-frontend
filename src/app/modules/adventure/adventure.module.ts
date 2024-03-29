import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdventureMenuPageComponent } from './pages/adventure-menu-page/adventure-menu-page.component';
import { AdventureRoutingModule } from './adventure-routing.module';
import { AdventureSelectPageComponent } from './pages/adventure-select-page/adventure-select-page.component';
import { AdventureLevelPageComponent } from './pages/adventure-level-page/adventure-level-page.component';
import { AdventureControlsComponent } from './pages/adventure-level-page/components/adventure-controls/adventure-controls.component';
import { GameOverPageComponent } from './pages/game-over-page/game-over-page.component';
import { LevelCompleteComponent } from './pages/level-complete/level-complete.component';
import { AdventureReplayPageComponent } from './pages/adventure-replay-page/adventure-replay-page.component';

@NgModule({
  declarations: [
    AdventureMenuPageComponent,
    AdventureSelectPageComponent,
    AdventureLevelPageComponent,
    AdventureControlsComponent,
    GameOverPageComponent,
    LevelCompleteComponent,
    AdventureReplayPageComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AdventureRoutingModule],
})
export class AdventureModule {}
