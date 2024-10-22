import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatgptPageComponent } from './pages/catgpt-page/catgpt-page.component';
import { CatgptRoutingModule } from './catgpt-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CatgptPageComponent],
  imports: [CatgptRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class CatgptModule {}
