import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  uri = "https://backendrentacar.herokuapp.com/";
  constructor(private http:HttpClient) { }

  getCars() {
    return this.http.get(this.uri+"api/arabalar");
  }

  addCars(ücret,marka,yil) {
    const car = {
      ücret:ücret,
      marka:marka,
      yil:yil
    };
    return this.http.post(this.uri+"api/arabalar/ekle",car);
  }

}
