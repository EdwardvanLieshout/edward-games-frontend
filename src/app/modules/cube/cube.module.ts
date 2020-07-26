import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubePageComponent } from './pages/cube-page/cube-page.component';
import { CubeRoutingModule } from './cube-routing.module';
import { RightFaceComponent } from './pages/cube-page/components/right-face/right-face.component';
import { FrontFaceComponent } from './pages/cube-page/components/front-face/front-face.component';

@NgModule({
  declarations: [CubePageComponent, RightFaceComponent, FrontFaceComponent],
  imports: [CommonModule, CubeRoutingModule],
})
export class CubeModule {}
