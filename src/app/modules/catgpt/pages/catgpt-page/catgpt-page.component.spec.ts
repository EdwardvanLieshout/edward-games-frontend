import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgptPageComponent } from './catgpt-page.component';

describe('CatgptPageComponent', () => {
  let component: CatgptPageComponent;
  let fixture: ComponentFixture<CatgptPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatgptPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
