# Meet React App

# Description
A serverless meeting application based on filtering by location and displaying events and visual information about that selected location

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

## Feature 2
- As a user, I should be able to see events collapsed by default so that it preserves space
    **Given** user hasn't selected any events
    **When** they open the app
    **Then** the user should see events collapsed
- As a user, I should be able to expand an event so that I can see the details
    **Given** user has selected 'Details'
    **When** the user found the event
    **Then** the user should see an expanded view with details
- As a user, I should be able to collapse an event so that I can hide details
    **Given** user has expanded an event
    **When** they the user clicked 'Details'
    **Then** the user should have the option to collapse it

## Feature 3
- As a user, I should be able to see 32 events as a default in case I don't want to specify a specific number
    **Given** user hasn't entered a specific number of events
    **When** the user requested a location
    **Then** the user should see the default 32 events
- As a user, I should be able to change the number of events displayed so I can see my custom selection
    **Given** user hasn't selected any events
    **When** they open the app
    **Then** the user should see events collapsed

## Feature 4
- As a user, I should be able to see cached data when there is no internet connection so that I can still be productive
    **Given** user is offline
    **When** they open the app
    **Then** the user should see cached data
- As a user, when I am working offline I should see an error when changing search settings so that I know it's not accessible
    **Given** user is offline
    **When** they try to change the search settings
    **Then** the user should see an error that it's not accessible

## Feature 5
- As a user, I should be able to install the meet app on my home screen so that I can easily access it
    **Given** user wants to access the app from their home screen
    **When** they open the app
    **Then** the user should have an option to install it

## Feature 6
- As a user, I should be able to see chart information for upcoming events in my selected city so that I have a visual representation of the data
    **Given** user has requested events
    **When** they select a city
    **Then** the user should see a chart