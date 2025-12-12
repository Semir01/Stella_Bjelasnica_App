export interface Apartment{
    Id: number;
    sprat: number;
    broj: number;
    status: 'slobodan' | 'rezervisan' | 'prodat';
    x: number;
    y: number;
}