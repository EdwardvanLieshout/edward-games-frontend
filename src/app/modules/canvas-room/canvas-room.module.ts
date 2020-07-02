import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasRoomPageComponent } from './pages/canvas-room-page/canvas-room-page.component';
import { CanvasRoomRoutingModule } from './canvas-room-routing.module';



@NgModule({
  declarations: [CanvasRoomPageComponent],
  imports: [
    CommonModule, CanvasRoomRoutingModule
  ]
})
export class CanvasRoomModule { }
