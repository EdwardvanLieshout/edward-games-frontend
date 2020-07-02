import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasRoomPageComponent } from './canvas-room-page.component';

describe('CanvasRoomPageComponent', () => {
  let component: CanvasRoomPageComponent;
  let fixture: ComponentFixture<CanvasRoomPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasRoomPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasRoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
