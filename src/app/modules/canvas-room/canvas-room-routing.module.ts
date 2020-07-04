import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasRoomPageComponent } from './pages/canvas-room-page/canvas-room-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CanvasRoomPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanvasRoomRoutingModule {}
