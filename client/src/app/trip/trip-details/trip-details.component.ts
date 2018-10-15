import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../model/trip";
import {TripService} from "../trip.service";

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  @Input() selectedTrip:Trip;

  constructor(private tripService:TripService) { }

  ngOnInit() {
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

}
