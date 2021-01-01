import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvyComponent } from './prvy.component';

describe('PrvyComponent', () => {
  let component: PrvyComponent;
  let fixture: ComponentFixture<PrvyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrvyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
