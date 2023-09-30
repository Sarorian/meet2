import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';

describe('<NumberOfEvents /> Component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} />);
  });

  test('has a textbox', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument();
  });

  test('default value of input textbox is 32', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
  });

  test('updates number of events when user types', async () => {
    await userEvent.type(NumberOfEventsComponent.queryByRole('textbox'), 
        '{backspace}{backspace}10');
    expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('10');
  });
});