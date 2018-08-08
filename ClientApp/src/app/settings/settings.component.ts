import { Component } from '@angular/core';
import { NavMenuService } from '../services/nav-menu.service';

@Component({
  providers: [NavMenuService],
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
