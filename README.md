
# Day 27 Internship Project: Weather Condition Selector

## Project Overview

The Weather Condition Selector is a responsive web application built using HTML, CSS, and JavaScript. Users can select a weather condition from a dropdown menu and view its matching icon, title, description, and background style.

This project demonstrates conditional rendering and mapping data to a user interface without using an external API.

## Objectives

- Practice JavaScript objects and key-value pairs.
- Understand event listeners and DOM manipulation.
- Update UI elements based on user selection.
- Apply CSS classes dynamically.
- Create a responsive and user-friendly interface.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Features

- Dropdown menu with seven weather conditions.
- Matching emoji icon and description.
- Dynamic background colors for each condition.
- Default display before a selection is made.
- Responsive design for desktop and mobile screens.
- Smooth animation when the weather display updates.
- No external API required.

## Weather Conditions

- Sunny
- Cloudy
- Rainy
- Stormy
- Snowy
- Windy
- Foggy

## Project Structure

Day_7_Weather_Condition_Selector/
- index.html
- style.css
- script.js
- README.md

## How to Run

1. Download or copy all project files into the same folder.
2. Open the folder in Visual Studio Code.
3. Open index.html in a web browser.
4. Select a weather condition from the dropdown.
5. Observe the icon, title, description, and background change.

You can also use the Live Server extension in Visual Studio Code.

## How It Works

Weather information is stored in a JavaScript object named weatherData. Each weather condition is a key containing its icon, title, description, and background class.

When the dropdown selection changes, a JavaScript event listener reads the selected key and updates the corresponding HTML elements. CSS classes are added dynamically to change the background.

## Learning Outcomes

- Working with JavaScript objects.
- Using change event listeners.
- Accessing HTML elements through the DOM.
- Updating text content dynamically.
- Adding and removing CSS classes.
- Creating responsive layouts.

## Limitations

- The application does not display real-time weather.
- Weather details are predefined.
- No weather API or location detection is used.

## Future Scope

- Integrate a weather API for live weather data.
- Add city search and location-based weather.
- Display temperature, humidity, and wind speed.
- Add a multi-day weather forecast.

## Conclusion

The Weather Condition Selector demonstrates how HTML, CSS, and JavaScript can work together to create an interactive web page. It provides practical experience with objects, event handling, conditional UI updates, and responsive styling.
