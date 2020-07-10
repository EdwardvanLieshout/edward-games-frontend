import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventureMenuPageComponent } from './pages/adventure-menu-page/adventure-menu-page.component';
import { AdventureRoutingModule } from './adventure-routing.module';

@NgModule({
  declarations: [AdventureMenuPageComponent],
  imports: [CommonModule, AdventureRoutingModule],
})
export class AdventureModule {}
