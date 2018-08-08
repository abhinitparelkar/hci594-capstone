import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../services/nav-menu.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  constructor(public nav: NavMenuService) {
    this.nav.hide();
  }

  ngOnInit(): void {
    this.nav.hide();
  }
}
