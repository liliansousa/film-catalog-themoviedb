import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public showMobileMenu: boolean = false;

  ngOnInit() {
  }

  public toggleMenu(){
    this.showMobileMenu = !this.showMobileMenu;
  }

}
