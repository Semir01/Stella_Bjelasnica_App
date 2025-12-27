import { Apartment } from "../models/apartment-model";

export const APARTMENTS: Apartment[] = [
    { Id: 1, sprat: 1, broj: 1, naziv: 'Apartman 1' ,status: 'Slobodan', x: 15, y: 40, brojSoba: 2, kvadratura: 45,
        images: [
            'assets/apartments_image/položaj.jpg',
            'assets/apartments_image/tlocrt.jpg',
            'assets/apartments_image/dnevna.jpg',
            'assets/apartments_image/soba1.jpg',
            'assets/apartments_image/soba2.jpg',
            'assets/apartments_image/kupatilo.jpg',
        ]
    },
    { Id: 2, sprat: 1, broj: 2, naziv: 'Apartman 2' ,status: 'Prodat', x: 25, y: 40, brojSoba: 3, kvadratura: 60 },
    { Id: 3, sprat: 1, broj: 3, naziv: 'Apartman 3' ,status: 'Rezervisan', x: 35, y: 40, brojSoba: 2, kvadratura: 50 },
    { Id: 4, sprat: 1, broj: 4, naziv: 'Apartman 4' ,status: 'Slobodan', x: 45, y: 40, brojSoba: 1, kvadratura: 30 },
    { Id: 5, sprat: 1, broj: 5, naziv: 'Apartman 5' ,status: 'Slobodan', x: 55, y: 40, brojSoba: 2, kvadratura: 40 },
    { Id: 6, sprat: 1, broj: 6, naziv: 'Apartman 6' ,status: 'Prodat', x: 65, y: 40 , brojSoba: 3, kvadratura: 70 },
    { Id: 7, sprat: 1, broj: 7, naziv: 'Apartman 7' ,status: 'Slobodan', x: 75, y: 40 , brojSoba: 2, kvadratura: 55 },

    { Id: 5, sprat: 2, broj: 1, naziv: 'Apartman 5' ,status: 'Slobodan', x: 15, y: 40, brojSoba: 2, kvadratura: 45 },
    { Id: 6, sprat: 2, broj: 2, naziv: 'Apartman 6' ,status: 'Rezervisan', x: 25, y: 40, brojSoba: 2, kvadratura: 50 },
    { Id: 7, sprat: 2, broj: 3, naziv: 'Apartman 7' ,status: 'Prodat', x: 35, y: 40, brojSoba: 3, kvadratura: 65 },
]