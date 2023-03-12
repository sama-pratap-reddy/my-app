import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenComponent } from './pen.component';

describe('PenComponent', () => {
  let component: PenComponent;
  let fixture: ComponentFixture<PenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
