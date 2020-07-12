import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureControlsComponent } from './adventure-controls.component';

describe('AdventureControlsComponent', () => {
  let component: AdventureControlsComponent;
  let fixture: ComponentFixture<AdventureControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
