import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel, NgModelGroup, FormGroup, FormControl } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {


  carInput : FormGroup;
  car = {
    marka:String,
    ucret:Number,
    yil:Number
  }

  constructor(private httpService:ServerService) { }

  ngOnInit() {
    this.carInput = new FormGroup({
      "marka":new FormControl(null),
      "ucret":new FormControl(null),
      "yil":new FormControl(null)
    });
  };

  onSubmit() {
    this.car = this.carInput.value;
    this.httpService.addCars(this.car.ucret,this.car.marka,this.car.yil)
      .subscribe((car) => {
        this.carInput.reset();
      });
  };
}
