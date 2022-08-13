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

This my solution for Unit 8: Lab 1 "Countries Around The World" in the 2022 C# .NET After-Hours Boot Camp at Grand Circus.

# COUNTRIES AROUND THE WORLD
### Objective: 
Javascript and DOM

### Task: 
In Javascript, Create a Country class and then an array of countries. In a separate function, prompt the user asking which country they’d like to display. Then recolor the DOM based on the Country selected. To start, make objects for at least 5 different countries.

### Starter Kit: 
https://github.com/TommyWaalkes/CountryColorsStarterKit

### Build Specifications: 
The Country class should contain the following properties: 
- Name 
- Official language 
- Hello World! In their language 
- Primary National Colors Array (Here’s a good list: https://en.wikipedia.org/wiki/National_colours)

Each country should also have a method called Display colors, that using Javascript, will repaint the DOM to the color scheme of the selected country. You should also swap in: The Country’s name, their official language, and Hello World! In that language. (Google Translate ;) ) 

See the attached starter kit for the HTML/CSS.

Note: document.getElementById function will be your best friend when doing this lab.

### Extended Challenges: 
Add in an image, which when swapping countries will display the selected country’s flag. 
Instead of using a Prompt Function, create an html Drop-Down menu, that allows you to pick a country. 
