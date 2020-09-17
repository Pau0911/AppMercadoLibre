import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url ="https://api.mercadolibre.com/sites/MCO/search?q="
  urlProduct="https://api.mercadolibre.com/items/"
  constructor(private http: HttpClient) {     

  }

  getProduct(product: string, offset:number) {
    return this.http.get(`${this.url}${product}&offset=${offset}`).pipe(map((data: any) => {
      console.log("data",data)
      return data;
    }));
  }
  getIdProduct(idproduct: string){
    return this.http.get(`${this.urlProduct}${idproduct}`).pipe(map((data: any) => {
      return data;
    }));
  }


}
