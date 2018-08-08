import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../services/nav-menu.service';

@Component({
  selector: 'app-sync-device',
  templateUrl: './sync-device.component.html',
  styleUrls: ['./sync-device.component.css']
})
export class SyncDeviceComponent implements OnInit {
  constructor(public nav: NavMenuService) {
  }

  ngOnInit(): void {
    this.nav.hide();
  }
}
