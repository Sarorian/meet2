# Meet React App

# Description

A serverless meeting application based on filtering by location and displaying events and visual information about that selected location

## Serverless integration

The AWS Lambda serverless functions are used to handle real-time processing, authentication, event triggers and provide scalability

# Access

[Meet app](https://sarorian.github.io/meet2/)

# Requirements

This application uses

- Node.js
- React client
- Express
- Serverless functionality with AWS and Lambda
- Google Calendar API

# Local Installation Instructions

Clone the repository on your machine, then install the npm dependencies using:

```
npm install
```

# Running the app locally

In order to start the server locally:

```
npm start run
```

# User Stories

## Scenario 1

- As a user, when I first open the app I should see upcoming events from all cities

  - **Given** user hasn’t searched for any city;
  - **When** the user opens the app;
  - **Then** the user should see a list of all upcoming events.

- As a user when I start searching for a city I should see a list of suggestions

  - **Given** the main page is open;
  - **When** the user starts typing in the city textbox;
  - **Then** the user should see al ist of cities that match what they have typed.

- As a user, I would like to select a city from the suggested list

  - **Given** user was typing 'xxx' in the textbox;
  - **When** the user selects a city from the returned list;
  - **Then** their city should be changed to that city.

## Scenario 2

- As a user, I should see all events details collapsed by default

  - **Given** the user first opens the app;
  - **When** the user sees all the events;
  - **Then** the details of all those events should be hidden.

- As a user, I should be able to expand an event so that I can see the details

  - **Given** user has selected 'Show Details';
  - **When** the user found the event;
  - **Then** the user should see an expanded view of the event with details.

- As a user, I should be able to collapse an event so that I can hide details

  - **Given** user has clicked 'Hide Details';
  - **When** they have opened the events details;
  - **Then** the details should be hidden.

## Scenario 3

- As a user, I should be able to see 32 events as a default in case I don't want to specify a specific number

  - **Given** user has opened the app;
  - **When** the user sees the return event list;
  - **Then** the user should see the default 32 events.

- As a user, I should be able to change the number of events displayed so I can see my custom selection

  - **Given** the user has events displayed;
  - **When** the user changes the number of events to display;
  - **Then** the user should see the requested number of events displayed.

## Scenario 4

- As a user, I should be able to see cached data when there is no internet connection so that I can still be productive

  - **Given** user is offline;
  - **When** they open the app;
  - **Then** the user should see cached data.

- As a user, when I am working offline I should see an error when changing search settings so that I know it's not accessible
  - **Given** user is offline;
  - **When** they try to change the search settings;
  - **Then** the user should see an error that it's not accessible.

## Scenario 5

- As a user, I should be able to install the meet app on my home screen so that I can easily access it
  - **Given** user wants to access the app from their home screen;
  - **When** they open the app;
  - **Then** the user should have an option to install it.

## Scenario 6

- As a user, I should be able to see chart information for upcoming events in my selected city so that I have a visual representation of the data

  - **Given** user has requested events;
  - **When** they select a city;
  - **Then** the user should see a chart.
