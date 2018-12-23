import { Component, OnInit, Output } from '@angular/core';
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
          console.log(this.cars[i]);
        }
      });
      
  };



  getUcret(i:number){
    return this.cars[i];
  }

  setUpdateID(id:number){
    this.httpService.setId(id);
  }

  delete(id:number) {
      this.httpService.deleteCars(id).subscribe((err) => {
        if(!err) {
          console.log("Başarıyla sonuçlandı");
        }
        console.log("BAŞARILI");
      });
  };



}
