import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTitleComponent } from './room-title.component';

describe('RoomTitleComponent', () => {
  let component: RoomTitleComponent;
  let fixture: ComponentFixture<RoomTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
