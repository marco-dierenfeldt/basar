import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Configservice {

private defaultCategoryValues = ['FURNITURE', 'SPORT', 'TOYS', 'BABY', 'CLOTHING', 'BOOKS', 'PREGNANCY', 'MEDIA', 'SHOES'];

  getCategories() {
    return this.defaultCategoryValues;
  }
}

export enum DefaultCategories {
  FURNITURE = 'Möbel',
  SPORT = 'Sport+Freizeit',
  TOYS = 'Spielwaren',
  BABY = 'Baby',
  BOOKS = 'Bücher',
  PREGNANCY = 'Schwangerschaft',
  MEDIA = 'Medien',
  SHOES = 'Schuhe',
  CLOTHING = 'Kleidung'
}
