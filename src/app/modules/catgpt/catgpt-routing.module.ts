import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatgptPageComponent } from './pages/catgpt-page/catgpt-page.component';

const routes: Routes = [
  {
    path: '',
    component: CatgptPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatgptRoutingModule {}
