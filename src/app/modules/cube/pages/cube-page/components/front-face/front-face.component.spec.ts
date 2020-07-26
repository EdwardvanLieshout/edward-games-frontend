import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontFaceComponent } from './front-face.component';

describe('FrontFaceComponent', () => {
  let component: FrontFaceComponent;
  let fixture: ComponentFixture<FrontFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
