import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature(__filename.replace(".test.js",".feature"));

defineFeature(feature, test => {
    test('As a user, I should see all events details collapsed by default', ({ given, when, then }) => {
        let AppComponent;        
        given('the user first opens the app', () => {
            AppComponent = render(<App />);
        });
        
        when('the user sees all the events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
              const EventListItems = within(AppDOM).queryAllByRole('listitem');
              expect(EventListItems[0]).toBeTruthy();
            });
        });
    
        then('the details of all those events should be hidden', () => {
            const AppDOM = AppComponent.container.firstChild;
            const detailsDOM = AppDOM.querySelector('.details');
            expect(detailsDOM).not.toBeInTheDocument();
        });
      });
    
    test('As a user, I should be able to expand an event so that I can see the details', ({ given, when, then }) => {
        let AppComponent;
        given('user has selected "Show Details"', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
              });
            const button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);
        });

        when('the user found the event', async () => {

        });

        then('the user should see an expanded view of the event with details', () => {
            const appDOM = AppComponent.container.firstChild;
            const detailsDOM = appDOM.querySelector('.details');
            expect(detailsDOM).toBeInTheDocument();
        });
      });

    test('As a user, I should be able to collapse an event so that I can hide details', ({ given, and, when, then }) => {
        let AppComponent;
        given('user has clicked "Hide Details"', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
              });
            await userEvent.click(AppComponent.queryAllByText('Show Details')[0]);  
            await userEvent.click(AppComponent.queryAllByText('Hide Details')[0]);
        });

        when('they have opened the events details', () => {

        });

        then('the details should be hidden', () => {
            const appDOM = AppComponent.container.firstChild;
            const detailsDOM = appDOM.querySelector('.details');
            expect(detailsDOM).not.toBeInTheDocument();
        });
    })
});