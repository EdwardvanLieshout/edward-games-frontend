import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdventureMenuPageComponent } from './pages/adventure-menu-page/adventure-menu-page.component';
import { AdventureSelectPageComponent } from './pages/adventure-select-page/adventure-select-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdventureMenuPageComponent,
  },
  {
    path: 'select',
    component: AdventureSelectPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventureRoutingModule {}
