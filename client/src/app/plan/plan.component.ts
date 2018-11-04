import {Component, OnInit} from '@angular/core';
import {PlanService} from "./plan.service";
import {Continent} from "../model/continent";
import {Country} from "../model/country";
import {NgForm, FormGroup, FormControl, Validators, FormArray, Form} from "@angular/forms";

@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.css']
})

export class PlanComponent implements OnInit {
    continents: Continent[];
    selectedCountries: Country[] = [];
    newPlanForm: FormGroup;
    incorrectDateRangeError: any = {isError: false, errorMessage: ''};
    alreadyAddedCountryError: any = {isError: false, errorMessage: ''};

    constructor(private planService: PlanService) {
    }

    ngOnInit() {
        this.newPlanForm = new FormGroup({
            'title': new FormControl(null, Validators.required),
            'description': new FormControl(null, Validators.required),
            'countries': new FormArray([]),
            'beginningDate': new FormControl(null),
            'endingDate': new FormControl(null)
        });

        this.planService.getAllContintesWithCountries()
            .subscribe(date => (this.continents = date));
    }

    onAddCountry(country: Country) {
        const control = new FormControl(country);
        if (!this.checkIfCountryAlreadyAdded(country)) {
            (<FormArray>this.newPlanForm.get('countries')).push(control);
            this.selectedCountries.push(country);
            this.alreadyAddedCountryError = {isError: false, errorMessage: ''};
        }
    }

    removeCountryFromList(index: number) {
        (<FormArray>this.newPlanForm.get('countries')).removeAt(index);
        this.selectedCountries.splice(index, 1);
        this.alreadyAddedCountryError = {isError: false, errorMessage: ''};
    }

    onSubmit() {
        this.isDateCorrectValidator();
        this.submitNewPlan();
    }

    isDateCorrectValidator() {
        if (new Date(this.newPlanForm.get('endingDate').value) < new Date(this.newPlanForm.get('beginningDate').value)) {
            this.incorrectDateRangeError = {
                isError: true,
                errorMessage: 'Ending date cannot be earlier than starting date'
            };
        }
    }

    checkIfCountryAlreadyAdded(country: Country): boolean {
        if (this.selectedCountries.indexOf(country) !== -1) {
            this.alreadyAddedCountryError = {isError: true, errorMessage: 'This country is already added'};
            return true;
        }
        return false;
    }

    submitNewPlan() {
        this.planService.submitNewPlan(this.newPlanForm.value);
    }
}
