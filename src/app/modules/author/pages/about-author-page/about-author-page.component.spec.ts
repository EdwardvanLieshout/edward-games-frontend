import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAuthorPageComponent } from './about-author-page.component';

describe('AboutAuthorPageComponent', () => {
  let component: AboutAuthorPageComponent;
  let fixture: ComponentFixture<AboutAuthorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAuthorPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAuthorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
