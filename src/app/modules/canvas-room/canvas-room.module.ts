import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasRoomPageComponent } from './pages/canvas-room-page/canvas-room-page.component';
import { CanvasRoomRoutingModule } from './canvas-room-routing.module';
import { RoomViewComponent } from './pages/canvas-room-page/components/room-view/room-view.component';
import { MapViewComponent } from './pages/canvas-room-page/components/map-view/map-view.component';
import { RoomTitleComponent } from './pages/canvas-room-page/components/room-title/room-title.component';
import { RoomInfoComponent } from './pages/canvas-room-page/components/room-info/room-info.component';
import { ScreenModalComponent } from './pages/canvas-room-page/components/screen-modal/screen-modal.component';
import { ControlButtonsComponent } from './pages/canvas-room-page/components/control-buttons/control-buttons.component';

@NgModule({
  declarations: [
    CanvasRoomPageComponent,
    RoomViewComponent,
    MapViewComponent,
    RoomTitleComponent,
    RoomInfoComponent,
    ScreenModalComponent,
    ControlButtonsComponent,
  ],
  imports: [CommonModule, CanvasRoomRoutingModule],
})
export class CanvasRoomModule {}
