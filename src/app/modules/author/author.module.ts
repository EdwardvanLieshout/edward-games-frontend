import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutAuthorPageComponent } from './pages/about-author-page/about-author-page.component';
import { AuthorRoutingModule } from './author-routing.module';

@NgModule({
  declarations: [AboutAuthorPageComponent],
  imports: [CommonModule, AuthorRoutingModule],
})
export class AuthorModule {}
