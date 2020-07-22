import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cube-page',
  templateUrl: './cube-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CubePageComponent {
  @ViewChild('cube', { static: true })
  public cube: ElementRef<HTMLDivElement>;

  @ViewChild('smallCube', { static: true })
  public smallCube: ElementRef<HTMLDivElement>;

  @ViewChild('smallerCube', { static: true })
  public smallerCube: ElementRef<HTMLDivElement>;

  public moveFront = (): void => {
    this.cube.nativeElement.classList.remove('e-cube--right');
    this.cube.nativeElement.classList.remove('e-cube--back');
    this.cube.nativeElement.classList.remove('e-cube--left');
    this.cube.nativeElement.classList.remove('e-cube--top');
    this.cube.nativeElement.classList.remove('e-cube--bottom');
    this.cube.nativeElement.classList.add('e-cube--front');
  };

  public moveRight = (): void => {
    this.cube.nativeElement.classList.remove('e-cube--front');
    this.cube.nativeElement.classList.remove('e-cube--back');
    this.cube.nativeElement.classList.remove('e-cube--left');
    this.cube.nativeElement.classList.remove('e-cube--top');
    this.cube.nativeElement.classList.remove('e-cube--bottom');
    this.cube.nativeElement.classList.add('e-cube--right');
  };

  public moveBack = (): void => {
    this.cube.nativeElement.classList.remove('e-cube--right');
    this.cube.nativeElement.classList.remove('e-cube--front');
    this.cube.nativeElement.classList.remove('e-cube--left');
    this.cube.nativeElement.classList.remove('e-cube--top');
    this.cube.nativeElement.classList.remove('e-cube--bottom');
    this.cube.nativeElement.classList.add('e-cube--back');
  };

  public moveLeft = (): void => {
    this.cube.nativeElement.classList.remove('e-cube--right');
    this.cube.nativeElement.classList.remove('e-cube--back');
    this.cube.nativeElement.classList.remove('e-cube--front');
    this.cube.nativeElement.classList.remove('e-cube--top');
    this.cube.nativeElement.classList.remove('e-cube--bottom');
    this.cube.nativeElement.classList.add('e-cube--left');
  };

  public moveTop = (): void => {
    this.cube.nativeElement.classList.remove('e-cube--right');
    this.cube.nativeElement.classList.remove('e-cube--front');
    this.cube.nativeElement.classList.remove('e-cube--left');
    this.cube.nativeElement.classList.remove('e-cube--back');
    this.cube.nativeElement.classList.remove('e-cube--bottom');
    this.cube.nativeElement.classList.add('e-cube--top');
  };

  public moveBottom = (): void => {
    this.cube.nativeElement.classList.remove('e-cube--right');
    this.cube.nativeElement.classList.remove('e-cube--back');
    this.cube.nativeElement.classList.remove('e-cube--front');
    this.cube.nativeElement.classList.remove('e-cube--top');
    this.cube.nativeElement.classList.remove('e-cube--back');
    this.cube.nativeElement.classList.add('e-cube--bottom');
  };

  public applyDisco = (): void => {
    this.smallCube.nativeElement.classList.remove('e-cube--small--grid');
    this.smallerCube.nativeElement.classList.remove('e-cube--smaller--grid');
    this.smallCube.nativeElement.classList.add('e-cube--small--disco');
    this.smallerCube.nativeElement.classList.add('e-cube--smaller--disco');
  };

  public applyNormal = (): void => {
    this.smallCube.nativeElement.classList.remove('e-cube--small--disco');
    this.smallerCube.nativeElement.classList.remove('e-cube--smaller--disco');
    this.smallCube.nativeElement.classList.remove('e-cube--small--grid');
    this.smallerCube.nativeElement.classList.remove('e-cube--smaller--grid');
  };

  public applyGrid = (): void => {
    this.smallCube.nativeElement.classList.remove('e-cube--small--disco');
    this.smallerCube.nativeElement.classList.remove('e-cube--smaller--disco');
    this.smallCube.nativeElement.classList.add('e-cube--small--grid');
    this.smallerCube.nativeElement.classList.add('e-cube--smaller--grid');
  };
}
