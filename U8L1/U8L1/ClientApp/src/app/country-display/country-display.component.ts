import { Component, OnInit } from '@angular/core';
import { CountriesService, Country } from '../countries.service';


@Component({
  selector: 'app-country-display',
  templateUrl: './country-display.component.html',
  styleUrls: ['./country-display.component.css']
})
export class CountryDisplayComponent implements OnInit {
  public myListOfCountries: Country[] = [];

  constructor(private myCountryService: CountriesService) {
    this.myListOfCountries = myCountryService.GetListOfCountries();
  }

  ngOnInit(): void {
  }

}
