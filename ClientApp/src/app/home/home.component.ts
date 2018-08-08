import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../services/nav-menu.service';

@Component({
  providers: [NavMenuService],
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(public nav: NavMenuService) { }

  ngOnInit() {
    this.nav.hide();
  }
}