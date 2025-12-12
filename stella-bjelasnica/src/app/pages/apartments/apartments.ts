import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmaniService } from '../../services/apartmani';
import { Apartment } from '../../models/apartment-model';

@Component({
  selector: 'app-apartments',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './apartments.html',
  styleUrl: './apartments.scss',
})
export class Apartments implements OnInit {


  names = [
    '== Sprat 1 ==',
    '== Sprat 2 ==',
    '== Sprat 3 ==',
    '== Sprat 4 ==',
    '== Sprat 5 =='
  ];

  images = [
    'assets/images/sprat1.jpg',
    'assets/images/sprat2.jpg',
    'assets/images/sprat3.jpg',
    'assets/images/sprat4.jpg',
    'assets/images/sprat5.jpg'
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  constructor(private apartmaniService: ApartmaniService) { }
  apartmani: Apartment[] = [];

  ngOnInit() {
    this.apartmani = this.apartmaniService.getApartmani();
  }

  get aktivniSprat(): number {
    return this.currentIndex + 1;
  }

  getApartmaniZaTrenutniSprat(): Apartment[] {
    return this.apartmani.filter(a => a.sprat === this.aktivniSprat);
  }

}
