import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(){
    return [
      {
        "id":123,
        "name":"Shashi",
        "brand":"US POLO",
        "price":1699
      },
      {
        "id":124,
        "name":"Shagoto",
        "brand":"IPhoneX",
        "price":102000
      },
      {
        "id":125,
        "name":"Shiddharth",
        "brand":"BMW MotoRide",
        "price":16990000
      },
      {
        "id":126,
        "name":"Bulti",
        "brand":"Brazzers POLO",
        "price":1699
      },
      {
        "id":127,
        "name":"Dipto",
        "brand":"Brazzers POLO",
        "price":1699
      }
    ];
  }
}
