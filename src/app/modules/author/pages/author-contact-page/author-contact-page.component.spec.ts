import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorContactPageComponent } from './author-contact-page.component';

describe('AuthorContactPageComponent', () => {
  let component: AuthorContactPageComponent;
  let fixture: ComponentFixture<AuthorContactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorContactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
