import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubePageComponent } from './pages/cube-page/cube-page.component';

const routes: Routes = [
  {
    path: '',
    component: CubePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CubeRoutingModule {}
