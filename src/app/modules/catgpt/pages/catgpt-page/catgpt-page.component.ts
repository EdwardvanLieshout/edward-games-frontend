import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catgpt-page',
  templateUrl: './catgpt-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatgptPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
