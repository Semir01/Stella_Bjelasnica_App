import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Apartment } from '../../../models/apartment-model';
import { RezervationModal } from '../../rezervation-modal/rezervation-modal/rezervation-modal'; 

@Component({
  selector: 'app-apartment-modal',  
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apartment-modal.html',
  styleUrls: ['./apartment-modal.scss'],
})
export class ApartmentModal {
  @Input() apartment!: Apartment;
  @Output() close = new EventEmitter<void>();
  @Output() openReservation = new EventEmitter<void>();

  onOverlayClick(event: MouseEvent): void {
   if ((event.target as HTMLElement).classList.contains('overlay')) {
      this.close.emit();
    }
  }

  currentIndex = 0;

  nextSlide(): void {
    if (!this.apartment.images) return;
    this.currentIndex = (this.currentIndex + 1) % this.apartment.images.length; // wrap-around
  }

  prevSlide(): void {
    if (!this.apartment.images) return;
    this.currentIndex = (this.currentIndex - 1 + this.apartment.images.length) % this.apartment.images.length; // wrap-around
  }

  sendRequest(){
    console.log("Emitting openReservation event");
    this.openReservation.emit();
  }
}
