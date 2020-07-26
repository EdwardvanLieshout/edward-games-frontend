import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/canvas-room/canvas-room.module').then((m) => m.CanvasRoomModule),
  },
  {
    path: 'author',
    loadChildren: () => import('./modules/author/author.module').then((m) => m.AuthorModule),
  },
  {
    path: 'adventure',
    loadChildren: () => import('./modules/adventure/adventure.module').then((m) => m.AdventureModule),
  },
  {
    path: 'cube',
    loadChildren: () => import('./modules/cube/cube.module').then((m) => m.CubeModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
