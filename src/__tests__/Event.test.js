import Event from '../components/Event';
import { render } from '@testing-library/react';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const getFirstRecord = async () => {
    try  {
        const data = await getEvents()
        return data[0];
    } catch(e) {
        return  {
            "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",
            "created": "2020-05-19T19:17:46.000Z",
            "summary": "Learn JavaScript",
            "location": "London, UK",
            "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
            "status": "confirmed"
          }
    }
}

describe('<Event /> Component', () => {
  let EventComponent;
  beforeEach(async () => {
    const event = await getFirstRecord();
    EventComponent = render(<Event event={event} />);
  });

  test('renders event summary', async () => {
    const event = await getFirstRecord();
    expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
  });

  test('renders event time', async () => {
    const event = await getFirstRecord();
    expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
  });

  test('renders event location', async () => {
    const event = await getFirstRecord();    
    expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
  });

  test('displays the "Show Details" button', () => {
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button ", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Show Details');
    await user.click(button);

    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector('.details');
    expect(details).toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const button = EventComponent.queryByText('Show Details');
    const eventDOM = EventComponent.container.firstChild;
    await userEvent.click(button);

    const hideButton = EventComponent.queryByText('Hide Details');
    await userEvent.click(hideButton);

    const details = eventDOM.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });
});