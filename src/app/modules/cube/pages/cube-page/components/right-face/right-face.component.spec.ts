import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightFaceComponent } from './right-face.component';

describe('RightFaceComponent', () => {
  let component: RightFaceComponent;
  let fixture: ComponentFixture<RightFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
