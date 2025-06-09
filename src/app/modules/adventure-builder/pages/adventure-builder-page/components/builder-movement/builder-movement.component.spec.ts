import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderMovementComponent } from './builder-movement.component';

describe('BuilderMovementComponent', () => {
  let component: BuilderMovementComponent;
  let fixture: ComponentFixture<BuilderMovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderMovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
