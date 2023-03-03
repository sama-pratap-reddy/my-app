import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredomsComponent } from './boredoms.component';

describe('BoredomsComponent', () => {
  let component: BoredomsComponent;
  let fixture: ComponentFixture<BoredomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoredomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
