import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureSelectPageComponent } from './adventure-select-page.component';

describe('AdventureSelectPageComponent', () => {
  let component: AdventureSelectPageComponent;
  let fixture: ComponentFixture<AdventureSelectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureSelectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
