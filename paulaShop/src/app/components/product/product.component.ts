import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  idSeller:any
  id:any;
  nameSeller:string
  product: Product;


  constructor(private route:ActivatedRoute,private service:ServicesService) { }

  ngOnInit(){
    this.id=this.route.snapshot.params['id']
    console.log("idparam",this.id)
    this.getProductId()
  }


  getProductId(){
    this.service.getIdProduct(this.id).subscribe(data=>{
      this.product=data;
      //this.urlimg=data['pictures'[0]['url']]
      console.log("objeto",)
      this.getSeller()
    })
  }

  getSeller(){
    this.idSeller=this.product['seller_id']
    this.service.getSeller(this.idSeller).subscribe(data=>{
      this.nameSeller=data['nickname']
      console.log("seller",data)
    })
  }

}
