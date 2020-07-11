import { Component, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adventure-menu-page',
  templateUrl: './adventure-menu-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventureMenuPageComponent {
  @ViewChild('menu', { static: true })
  public menu: ElementRef<HTMLElement>;

  constructor(public router: Router) {}

  public highlight = (): void => {
    this.menu.nativeElement.classList.add('e-adventure__menu--light');
  };

  public stopHighlight = (): void => {
    this.menu.nativeElement.classList.remove('e-adventure__menu--light');
  };

  public toLevelSelect = (): void => {
    this.router.navigate(['adventure/select']);
  };

  public back = (): void => {
    this.router.navigate(['home']);
  };
}
