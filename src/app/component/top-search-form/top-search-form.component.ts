import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-top-search-form',
  templateUrl: './top-search-form.component.html',
  styleUrls: ['./top-search-form.component.scss']
})
export class TopSearchFormComponent implements OnInit {

  searcheForm = new FormGroup({
    searchQuery: new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.searcheForm.value);
    // this.router.navigate(['search?', this.searcheForm.value]);
  }

}
