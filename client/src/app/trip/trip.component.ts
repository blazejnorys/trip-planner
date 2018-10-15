import { Component, OnInit } from '@angular/core';
import {TripService} from "./trip.service";
import {Trip} from "../model/trip";
import {Country} from "../model/country"

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  trips:Trip[];
  selectedTrip:Trip;
  user = {
    username:"kowalskij"
  };

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getAllTripsForUser(this.user)
      .subscribe(date => (this.trips = date));
  }

  onSelectTrip(trip: Trip): void {
    this.selectedTrip = trip;
  }


}
