import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output()
  page = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  pageChanged(event: any){
    this.page.emit(event)
  }


}
