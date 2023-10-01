Feature: Specify number of events

 Scenario: As a user, I should be able to see 32 events as a default in case I do not want to specify a specific number
  Given user has opened the app
  When the user sees the return event list
  Then the user should see the default 32 events

 Scenario: As a user, I should be able to change the number of events displayed so I can see my custom selection
  Given the user has events displayed
  When the user changes the number of events to display
  Then the user should see the requested number of events displayed
