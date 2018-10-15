import { Component, OnInit } from '@angular/core';
import {TripService} from "../trip/trip.service";
import {Trip} from "../model/trip";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  name:string = "Borys";

  constructor() { }

  ngOnInit() {

  }

}
