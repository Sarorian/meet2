Feature: Toggle events details

 Scenario: As a user, I should see all events details collapsed by default
  Given the user first opens the app
  When the user sees all the events
  Then the details of all those events should be hidden

 Scenario: As a user, I should be able to expand an event so that I can see the details
  Given user has selected "Show Details"
  When the user found the event
  Then the user should see an expanded view of the event with details
  
 Scenario: As a user, I should be able to collapse an event so that I can hide details
  Given user has clicked "Hide Details"
  When they have opened the events details
  Then the details should be hidden