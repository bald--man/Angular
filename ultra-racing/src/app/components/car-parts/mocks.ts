import { CarPart } from './car-part';

export const CARPARTS: CarPart[] = [
  {
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5,
    "price": 3.29,
    "image": "/images/tire.jpg",
    "featured": false,
    "quantity": 0
  },
  {
    "id": 2,
    "name": "Reinforced Shocks",
    "description": "Shocks made from kryptonite",
    "inStock": 4,
    "price": 4.99,
    "image": "/images/tire.jpg",
    "featured": true,
    "quantity": 0
  },
  {
    "id": 3,
    "name": "Reinforced Shocks XL",
    "description": "Made from kryptonite-Z",
    "inStock": 0,
    "price": 7.25,
    "image": "/images/tire.jpg",
    "featured": false,
    "quantity": 0
  }
];
