import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  p: number = 1
  results: Product[]
  paginate: boolean = false
  product:string=""
  data: boolean = true
  loading: boolean = false
  initial: boolean = true
  sellers: any[]
  totalItemsPagination: number = 0
  id:any

  constructor(private service: ServicesService, private router:Router) { 

  }

  ngOnInit() {
  }

search(event: any){
  this.clearData()
console.log("Buscando la palabra:",event)
this.product=event
this.getProduct(50)
console.log("d")

}

getProduct(offset:number){
  this.service.getProduct(this.product,offset).subscribe(data => {
    this.results = data['results']
    console.log("d",this.results)

    this.totalItemsPagination = data['paging']['total']
      if (this.totalItemsPagination > 1000) {
        this.totalItemsPagination = 1000
        
      }
      
      this.loading = false  
      if (this.results.length === 0) {
        this.data = false
        this.paginate = false
      }
      this.paginate = true
      this.getSellers()
     
    
  });
}
pageChanged(event:any){
  this.p = event
  // console.log(event);
  this.getProduct((event - 1) * 50)
  window.scroll(0, 0);
}

getSellers(){
  for (let index = 0; index < this.results.length; index++) {
    const element = this.results[index]['seller']['id'];
    this.service.getSeller(element).subscribe(data => {
      console.log("",data.nickname)
      this.sellers.push(data)
    })
  }
}

clearData(){
  this.initial = false
  this.paginate = false
  this.data = true;
  this.loading = true
  this.results = []
  this.sellers = []

}

getIdProduct(id:any){
  this.router.navigate(['search',id])

}

}
