import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventureMenuPageComponent } from './pages/adventure-menu-page/adventure-menu-page.component';
import { AdventureRoutingModule } from './adventure-routing.module';
import { AdventureSelectPageComponent } from './pages/adventure-select-page/adventure-select-page.component';

@NgModule({
  declarations: [AdventureMenuPageComponent, AdventureSelectPageComponent],
  imports: [CommonModule, AdventureRoutingModule],
})
export class AdventureModule {}
