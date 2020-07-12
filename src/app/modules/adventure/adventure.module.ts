import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventureMenuPageComponent } from './pages/adventure-menu-page/adventure-menu-page.component';
import { AdventureRoutingModule } from './adventure-routing.module';
import { AdventureSelectPageComponent } from './pages/adventure-select-page/adventure-select-page.component';
import { AdventureLevelPageComponent } from './pages/adventure-level-page/adventure-level-page.component';
import { AdventureControlsComponent } from './pages/adventure-level-page/components/adventure-controls/adventure-controls.component';

@NgModule({
  declarations: [AdventureMenuPageComponent, AdventureSelectPageComponent, AdventureLevelPageComponent, AdventureControlsComponent],
  imports: [CommonModule, AdventureRoutingModule],
})
export class AdventureModule {}
