import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-search-form',
  templateUrl: './top-search-form.component.html',
  styleUrls: ['./top-search-form.component.scss']
})
export class TopSearchFormComponent {

  searcheForm = new FormGroup({
    searchQuery: new FormControl(null),
  })

  constructor(private router: Router) { }

  public disableBtn: boolean = true;
  
  onSubmit() {
    if (this.searcheForm.value.searchQuery != null) {
      this.router.navigate(['/search', this.searcheForm.value.searchQuery]);
    } else {

    }
  }

}
