import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorExperiencePageComponent } from './author-experience-page.component';

describe('AuthorExperiencePageComponent', () => {
  let component: AuthorExperiencePageComponent;
  let fixture: ComponentFixture<AuthorExperiencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorExperiencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorExperiencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
