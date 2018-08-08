import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../services/nav-menu.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  estimatedTime: number;

  constructor(public nav: NavMenuService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

  setRam(value) {
    this.estimatedTime = value;
    console.log(this.estimatedTime);
  }
}
