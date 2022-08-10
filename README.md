This my solution for Unit 8: Lab 1 "Countries Around The World" in the 2022 C# .NET After-Hours Boot Camp at Grand Circus.

# COUNTRIES AROUND THE WORLD
### Objective: 
Javascript and DOM

### Task:
Start by creating an ASP Net Core project with Angular.

In Angular, goto the counter.component.ts file and create a country class with the following fields:
- Name : string
- OfficialLanguage : string
- PrimaryColor : string

Create an array of 5 countries of your choice inside the CounterComponent class and provide values for each of the three fields.

Add a method to CounterComponent named "OnClickedChangeCountry" that takes no parameters and returns nothing.

Goto the counter.component.html file.  And add a button and hook it up to a method OnClickedChangeCountry.  Add two p tags, each with a unique id attribute value, "CountryName" and "CountryOfficialLanguage".

Go back to counter.component.ts.  When OnClickedChangeCountry is called, the user should be prompted for the name of the country.  Then search for that country in the array.  Once found, find the p tag named CountryName using document.getElementById, then set it's innerText equal to the Name field of this country.  Do the same for OfficialLanguage.  So what we accomplish here is to display the country's name and language.

Finally, change the color for both tags.  To do this, first create a string variable named newColorString to set the color.  Next assign it the value of "color:<the country object's PrimaryColor>".  
For example:
```
let newColorString = "color:"+currObject.PrimaryColor;
```
Then use document.getElementById to find the element for CountryName and call setAttribute("style", newColorString) on that object.  Do the same for OfficialLanguage.
