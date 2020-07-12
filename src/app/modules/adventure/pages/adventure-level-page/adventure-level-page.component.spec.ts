import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureLevelPageComponent } from './adventure-level-page.component';

describe('AdventureLevelPageComponent', () => {
  let component: AdventureLevelPageComponent;
  let fixture: ComponentFixture<AdventureLevelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureLevelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureLevelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
