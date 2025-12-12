import { Apartment } from "../models/apartment-model";

export const APARTMENTS: Apartment[] = [
    { Id: 1, sprat: 1, broj: 1, status: 'slobodan', x: 15, y: 40 },
    { Id: 2, sprat: 1, broj: 2, status: 'prodat', x: 25, y: 40 },
    { Id: 3, sprat: 1, broj: 3, status: 'rezervisan', x: 35, y: 40 },
    { Id: 4, sprat: 1, broj: 4, status: 'slobodan', x: 45, y: 40 },

    { Id: 5, sprat: 2, broj: 1, status: 'slobodan', x: 15, y: 40 },
    { Id: 6, sprat: 2, broj: 2, status: 'rezervisan', x: 25, y: 40 },
    { Id: 7, sprat: 2, broj: 3, status: 'prodat', x: 35, y: 40 },
]