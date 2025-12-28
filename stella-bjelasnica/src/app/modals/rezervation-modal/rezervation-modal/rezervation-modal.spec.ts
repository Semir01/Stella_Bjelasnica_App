import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervationModal } from './rezervation-modal';

describe('RezervationModal', () => {
  let component: RezervationModal;
  let fixture: ComponentFixture<RezervationModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezervationModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezervationModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
