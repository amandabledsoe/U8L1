import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  public GetListOfCountries(): Country[] {
    return this.ourListOfCountries;
  }

  public DisplayColors(country: Country): string[] {
    return country.PrimaryNationalColors;
  }


  public readonly ourListOfCountries: Country[] = [
    { Name: "United States of America", OfficialLanguage: "English", HelloWorldTranslation: "Hello World!", PrimaryNationalColors: ["red", "white", "blue"] },
    { Name: "Rwanda", OfficialLanguage: "Swahili", HelloWorldTranslation: "Salamu Dunia!", PrimaryNationalColors: ["green", "sky blue", "yellow"] },
    { Name: "France", OfficialLanguage: "French", HelloWorldTranslation: "Bonjour le Monde!", PrimaryNationalColors: ["red", "white", "blue"] },
    { Name: "Italy", OfficialLanguage: "Italian", HelloWorldTranslation: "Ciao Mondo!", PrimaryNationalColors: ["green", "white", "red"] },
    { Name: "Sri Lanka", OfficialLanguage: "Sinhala", HelloWorldTranslation: "හෙලෝ වර්ල්ඩ්!", PrimaryNationalColors: ["blue", "yellow", "maroon"] },
    { Name: "Norway", OfficialLanguage: "Norwegian", HelloWorldTranslation: "Hei Verden!", PrimaryNationalColors: ["red", "white", "blue"] },
    { Name: "Australia", OfficialLanguage: "English", HelloWorldTranslation: "Hello World!", PrimaryNationalColors: ["green", "gold", "blue"] },
  ]
}

export class Country {
  public Name: string = "";
  public OfficialLanguage: string = "";
  public HelloWorldTranslation: string = "";
  public PrimaryNationalColors: string[] = [];
}

