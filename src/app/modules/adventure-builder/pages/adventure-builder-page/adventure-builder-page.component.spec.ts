import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureBuilderPageComponent } from './adventure-builder-page.component';

describe('AdventureBuilderPageComponent', () => {
  let component: AdventureBuilderPageComponent;
  let fixture: ComponentFixture<AdventureBuilderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureBuilderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureBuilderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
