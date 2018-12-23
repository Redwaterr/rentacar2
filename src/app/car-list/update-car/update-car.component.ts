import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  carUpdate : FormGroup;
  car : any

  constructor(private httpService:ServerService) { }

  ngOnInit() {
    this.carUpdate = new FormGroup({
      "ücret":new FormControl(),
      "marka":new FormControl(),
      "yil":new FormControl()
    });
  };

  onUpdate(){
    this.car = this.carUpdate.value
    this.httpService.updateCars(this.car.ücret,this.car.marka,this.car.yil).subscribe((car) => {
    });
  };



}
