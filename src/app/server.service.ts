import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  id:number;
  uri = "https://backendrentacar.herokuapp.com/";

  constructor(private http:HttpClient) { }

  //ID AYARLAMA
  setId(id:number){
    this.id = id;
  }

  //GET
  getCars() {
    return this.http.get(this.uri+"api/arabalar");
  }

  //POST
  addCars(ücret,marka,yil) {
    const car = {
      ücret:ücret,
      marka:marka,
      yil:yil
    };
    return this.http.post(this.uri+"api/arabalar/ekle",car);
  }

  //PUT
  updateCars(ücret,marka,yil) {
    const car = {
      ücret:ücret,
      marka:marka,
      yil:yil
    };
    return this.http.put(this.uri+"api/arabalar/guncelle/"+this.id,car);
  }

  //DELETE
  deleteCars(id:number) {
    return this.http.delete(this.uri+"api/arabalar/sil/"+id);
  }

}
