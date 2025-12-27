export interface Apartment{
    Id: number;
    sprat: number;
    broj: number;
    naziv: string;
    status: 'Slobodan' | 'Rezervisan' | 'Prodat';
    x: number;
    y: number;
    brojSoba?: number;  
    kvadratura?: number;
    images?: string[
    ];
}