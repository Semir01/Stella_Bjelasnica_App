import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentModal } from './apartment-modal';

describe('ApartmentModal', () => {
  let component: ApartmentModal;
  let fixture: ComponentFixture<ApartmentModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
