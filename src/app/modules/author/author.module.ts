import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutAuthorPageComponent } from './pages/about-author-page/about-author-page.component';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorExperiencePageComponent } from './pages/author-experience-page/author-experience-page.component';
import { AuthorMediaPageComponent } from './pages/author-media-page/author-media-page.component';
import { AuthorContactPageComponent } from './pages/author-contact-page/author-contact-page.component';

@NgModule({
  declarations: [AboutAuthorPageComponent, AuthorExperiencePageComponent, AuthorMediaPageComponent, AuthorContactPageComponent],
  imports: [CommonModule, AuthorRoutingModule],
})
export class AuthorModule {}
