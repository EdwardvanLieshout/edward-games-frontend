import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutAuthorPageComponent } from './pages/about-author-page/about-author-page.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutAuthorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule {}
