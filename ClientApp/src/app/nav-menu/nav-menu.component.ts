import { Component } from '@angular/core';
import { NavMenuService } from '../services/nav-menu.service';

@Component({
  providers: [NavMenuService],
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent {
  isExpanded = false;
  visible: boolean;

  constructor(public nav: NavMenuService) { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
