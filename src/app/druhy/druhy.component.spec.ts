import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DruhyComponent } from './druhy.component';

describe('DruhyComponent', () => {
  let component: DruhyComponent;
  let fixture: ComponentFixture<DruhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DruhyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DruhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
