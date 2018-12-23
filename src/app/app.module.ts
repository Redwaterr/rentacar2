import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ServerService } from './server.service';

const routesDirections = [
  {path:"",component:HomeComponent},
  {path:"cars",component:CarListComponent},
  {path:"carAdd",component:AddCarComponent},
  {path:"**",component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    AddCarComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routesDirections)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
