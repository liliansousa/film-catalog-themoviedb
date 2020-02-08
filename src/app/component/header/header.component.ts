import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public showMobileMenu: boolean = false;
  public topScroll: boolean = false;

  ngOnInit() {
  }

  public toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

}
