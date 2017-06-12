import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarPartsComponent } from './components/car-parts/car-parts.component';
import { RacingDataService } from './components/car-parts/racing-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CarPartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RacingDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
