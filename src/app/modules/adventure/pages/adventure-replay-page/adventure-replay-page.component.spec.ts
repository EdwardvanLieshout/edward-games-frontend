import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureReplayPageComponent } from './adventure-replay-page.component';

describe('AdventureReplayPageComponent', () => {
  let component: AdventureReplayPageComponent;
  let fixture: ComponentFixture<AdventureReplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureReplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureReplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
