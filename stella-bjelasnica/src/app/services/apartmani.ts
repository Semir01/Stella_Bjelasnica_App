import { Injectable } from '@angular/core';
import { APARTMENTS } from '../data/apartments-data';
import { Apartment } from '../models/apartment-model';

@Injectable({
  providedIn: 'root',
})
export class ApartmaniService {

  getApartmani(): Apartment[] {
    return APARTMENTS;
  }

  getBySprat(sprat: number): Apartment[] {
    return APARTMENTS.filter(a => a.sprat === sprat);
  }

  getById(id: number): Apartment | undefined {
    return APARTMENTS.find(a => a.Id === id);
  }
}
