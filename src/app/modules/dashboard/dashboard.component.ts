import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor() {
    const backgroundColorToggle:string = "primary";
    const colorToggle:string="blue";
  }

  ngOnInit(): void {
  }

}
