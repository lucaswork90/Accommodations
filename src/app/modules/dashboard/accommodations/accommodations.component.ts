import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { AccommodationSuggestion } from './accommodation.interface';

@Component({
    selector: 'dashboard-accommodations',
    templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.scss']
})

export class AccommodationsComponent implements OnInit {

  accommodations: AccommodationSuggestion[] = [
    {
        thumbnail: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        title: "Amber Boutique Silom",
        rating: 8.5,
        location: "Bangkok",
        date: "Oct 17 21",
        description: "Free wifi, Fitness center, Breakfast included Non, Smooking Room, AC.",
        pricePerNight: 29
    },
    {
        thumbnail: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
        title: "Rambuttri Village Plaza",
        rating: 7.2,
        location: "Bangkok",
        date: "Oct 17 21",
        description: "Free wifi, Fitness center, Breakfast included Non, Smooking Room, AC.",
        pricePerNight: 29
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
