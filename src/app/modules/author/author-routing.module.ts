import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutAuthorPageComponent } from './pages/about-author-page/about-author-page.component';
import { AuthorExperiencePageComponent } from './pages/author-experience-page/author-experience-page.component';
import { AuthorMediaPageComponent } from './pages/author-media-page/author-media-page.component';
import { AuthorContactPageComponent } from './pages/author-contact-page/author-contact-page.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutAuthorPageComponent,
  },
  {
    path: 'experience',
    component: AuthorExperiencePageComponent,
  },
  {
    path: 'media',
    component: AuthorMediaPageComponent,
  },
  {
    path: 'contact',
    component: AuthorContactPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule {}
