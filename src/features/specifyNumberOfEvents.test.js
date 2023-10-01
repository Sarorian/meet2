import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature(__filename.replace(".test.js",".feature"));

defineFeature(feature, test => {
    test('As a user, I should be able to see 32 events as a default in case I do not want to specify a specific number', ({ given, when, then }) => {   
        let AppComponent;  
        let EventListItems;
        const DEFAULT_EVENTS = 32;

        given('user has opened the app', async () => {
          AppComponent = render(<App/>);
        });

        when('the user sees the return event list', async () => {
          const AppDOM = AppComponent.container.firstChild;
          await waitFor(() => {
            EventListItems = within(AppDOM).queryAllByRole('listitem');
            expect(EventListItems[0]).toBeTruthy();
          });
        });
    
        then('the user should see the default 32 events', () => {
          expect(EventListItems.length).toBe(DEFAULT_EVENTS);
        });
      });
    
    test('As a user, I should be able to change the number of events displayed so I can see my custom selection', ({ given, when, then }) => {
        let AppComponent;   
        const NEW_EVENTS_REQUESTED = 10;

        given('the user has events displayed', async () => {
          AppComponent = render(<App/>);
          const AppDOM = AppComponent.container.firstChild;
          await waitFor(() => {
            const EventListItems = within(AppDOM).queryAllByRole('listitem');
            expect(EventListItems[0]).toBeTruthy();
          });
        });

        when('the user changes the number of events to display', async () => {
          const AppDOM = AppComponent.container.firstChild;
          await userEvent.type(AppDOM.querySelector('#number-of-events').firstChild, 
            `{backspace}{backspace}${NEW_EVENTS_REQUESTED}`);
        });

        then('the user should see the requested number of events displayed', () => {
          const AppDOM = AppComponent.container.firstChild;
          const eventList = within(AppDOM).queryAllByRole('listitem');
          expect(eventList.length).toEqual(NEW_EVENTS_REQUESTED);
        });
      });
});