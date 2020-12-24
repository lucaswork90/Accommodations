import { Component, OnInit, Input } from '@angular/core';

import { AccommodationSuggestion } from './../accommodation.interface';

@Component({
  selector: 'dashboard-accommodation-item',
  templateUrl: './accommodation-item.component.html',
  styleUrls: ['./accommodation-item.component.scss']
})
export class AccommodationItemComponent implements OnInit {
  
  @Input() amd: AccommodationSuggestion;

  constructor() {
    this.amd = {
      thumbnail: "",
      title: "",
      rating: 0, 
      location: "",
      date: "",
      description: "",
      pricePerNight: 0
    }
  }

  ngOnInit():void {}

}
