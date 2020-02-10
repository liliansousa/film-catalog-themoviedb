import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  // TODO: Create pagination component

  @Input() totalPages: number;

  public previousBtn: boolean = false;
  public nextBtn: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  public getPage(value: any) {

  }

  public nextPage() {

  }

  public previousPage() {

  }

}
