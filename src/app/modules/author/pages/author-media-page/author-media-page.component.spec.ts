import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorMediaPageComponent } from './author-media-page.component';

describe('AuthorMediaPageComponent', () => {
  let component: AuthorMediaPageComponent;
  let fixture: ComponentFixture<AuthorMediaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorMediaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorMediaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
