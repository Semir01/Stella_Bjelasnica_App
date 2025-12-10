import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-apartments',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './apartments.html',
  styleUrl: './apartments.scss',
})
export class Apartments {


  names = [
    'Garaža 1',
    'Garaža 2',
    'Sprat 1',
    'Sprat 2',
    'Sprat 3',
    'Sprat 4',
    'Sprat 5'
  ];

   images = [
    'assets/images/garaže1.jpg',
    'assets/images/garaže2.jpg',
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
}
