import { Component, OnInit } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';
import { RacingDataService } from './racing-data.service';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent /*implements OnInit*/ {

  carParts: CarPart[];

  constructor(private racingDataService: RacingDataService) { }

  ngOnInit() {
    //this.carParts = CARPARTS;
    //let racingDataService = new RacingDataService();
    //this.carParts = racingDataService.getCarParts();
    //this.carParts = this.racingDataService.getCarParts();
    this.racingDataService.getCarParts().subscribe(carParts => this.carParts = carParts);
  }

  totalCarParts() {
    let sum = 0;
    /*for (let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;*/
    //return this.carParts.reduce(function(prev, current) { return prev + current.inStock; }, 0 );
    //return this.carParts.reduce((prev, current) => prev + current.inStock, 0 );

    if (Array.isArray(this.carParts)) {
      for (let carPart of this.carParts) {
        sum += carPart.inStock;
      }
    }
    return sum;
  }

  upQuantity( carPart ) {
    if (carPart.quantity < carPart.inStock) carPart.quantity++;
  }

  downQuantity(carPart) {
    if (carPart.quantity != 0) carPart.quantity--;
  }

}
