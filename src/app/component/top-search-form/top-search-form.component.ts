import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-search-form',
  templateUrl: './top-search-form.component.html',
  styleUrls: ['./top-search-form.component.scss']
})
export class TopSearchFormComponent implements OnInit {

  searcheForm = new FormGroup({
    searchQuery: new FormControl(''),
  })

  constructor(private router: Router) { }

  ngOnInit() {
    //TODO: Finish Search page and component
  }

  onSubmit() {
    this.router.navigate(['/search', this.searcheForm.value]);
  }

}
