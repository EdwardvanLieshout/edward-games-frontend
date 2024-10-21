import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventureBuilderPageComponent } from './pages/adventure-builder-page/adventure-builder-page.component';
import { AdventureBuilderRoutingModule } from './adventure-builder-routing.module';
import { BuilderMovementComponent } from './pages/adventure-builder-page/components/builder-movement/builder-movement.component';
import { BuilderCanvasComponent } from './pages/adventure-builder-page/components/builder-canvas/builder-canvas.component';
import { EntityListComponent } from './pages/adventure-builder-page/components/entity-list/entity-list.component';

@NgModule({
  declarations: [AdventureBuilderPageComponent, BuilderMovementComponent, BuilderCanvasComponent, EntityListComponent],
  imports: [CommonModule, AdventureBuilderRoutingModule],
})
export class AdventureBuilderModule {}
