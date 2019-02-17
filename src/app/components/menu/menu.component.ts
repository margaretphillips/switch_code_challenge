import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = './assets/images/logo_white.png';
  }

  ngOnInit() {
  }

}
