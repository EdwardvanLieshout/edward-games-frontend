import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasRoomPageComponent } from './pages/canvas-room-page/canvas-room-page.component';
import { CanvasRoomRoutingModule } from './canvas-room-routing.module';
import { RoomViewComponent } from './pages/canvas-room-page/components/room-view/room-view.component';
import { MapViewComponent } from './pages/canvas-room-page/components/map-view/map-view.component';



@NgModule({
  declarations: [CanvasRoomPageComponent, RoomViewComponent, MapViewComponent],
  imports: [
    CommonModule, CanvasRoomRoutingModule
  ]
})
export class CanvasRoomModule { }
