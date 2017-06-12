import { Component, OnInit } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent /*implements OnInit*/ {

  carParts: CarPart[];

  //constructor() { }

  ngOnInit() {
    this.carParts = CARPARTS;
  }

  totalCarParts() {
    let sum = 0;
    /*for (let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;*/
    //return this.carParts.reduce(function(prev, current) { return prev + current.inStock; }, 0 );
    return this.carParts.reduce((prev, current) => prev + current.inStock, 0 );
  }

  upQuantity( carPart ) {
    if (carPart.quantity < carPart.inStock) carPart.quantity++;
  }

  downQuantity(carPart) {
    if (carPart.quantity != 0) carPart.quantity--;
  }

}
