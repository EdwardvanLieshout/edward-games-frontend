import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdventureBuilderPageComponent } from './pages/adventure-builder-page/adventure-builder-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdventureBuilderPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventureBuilderRoutingModule {}
