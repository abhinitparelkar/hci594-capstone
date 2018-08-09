import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../services/nav-menu.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  estimatedTime: number;

  constructor(public nav: NavMenuService) { 
    this.estimatedTime = 15;
  }

  ngOnInit(): void {
    this.nav.hide();
  }

  setEstimatedTime(value) {
    this.estimatedTime = value;
    console.log(this.estimatedTime);
  }
}
