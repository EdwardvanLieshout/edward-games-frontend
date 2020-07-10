import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureMenuPageComponent } from './adventure-menu-page.component';

describe('AdventureMenuPageComponent', () => {
  let component: AdventureMenuPageComponent;
  let fixture: ComponentFixture<AdventureMenuPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureMenuPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
