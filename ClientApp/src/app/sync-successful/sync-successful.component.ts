import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../services/nav-menu.service';

@Component({
  selector: 'app-sync-successful',
  templateUrl: './sync-successful.component.html',
  styleUrls: ['./sync-successful.component.css']
})
export class SyncSuccessfulComponent implements OnInit {
  constructor(public nav: NavMenuService) {
  }

  ngOnInit(): void {
    this.nav.hide();
  }
}
