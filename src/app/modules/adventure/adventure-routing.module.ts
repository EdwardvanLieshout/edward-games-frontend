import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdventureMenuPageComponent } from './pages/adventure-menu-page/adventure-menu-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdventureMenuPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventureRoutingModule {}
