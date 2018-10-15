import {Component, OnInit} from '@angular/core';
import {PlanService} from "./plan.service";
import {Continent} from "../model/continent";
import {Country} from "../model/country";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  continents: Continent[];
  selectedCountries: Array<Country> = [];
  title="";
  model = "";
  pic="";
  description = "";
  beginningDate = "";
  endingDate = "";

  constructor(private planService: PlanService) {
  }

  ngOnInit() {
    this.planService.getAllContintesWithCountries()
      .subscribe(date => (this.continents = date));
  }

  onSubmit(form: NgForm){
    console.log(form)
  }

  printContinents() {
    console.log(this.selectedCountries);
  }

  selectCountry(country: Country) {
    this.selectedCountries.push(country);

  }


}
