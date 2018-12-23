import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars : [] = []

  
  constructor(private httpService : ServerService) { }

  ngOnInit() {
    this.httpService.getCars()
      .subscribe((cars) => {
        for(let i in cars){
          this.cars[i] = cars[i];
        }
      });
  };

  getYil(i:number) {
    return this.cars[i];
  }



}
