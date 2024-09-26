import {fireEvent, render, screen} from '@testing-library/react';
import MainDatePicker from '../MainTab';
import TimeContextProvider from '@/app/hooks/timeContext'; // Assuming your context is provided via a provider

// Mock the RecurrenceOptions and other components if necessary
jest.mock('../RecurranceOptions', () => () => (
  <div>Mocked RecurrenceOptions</div>
));

describe('MainDatePicker Component', () => {

    test('renders MainDatePicker with heading', () => {
      render(
        <TimeContextProvider>
          <MainDatePicker />
        </TimeContextProvider>
      );
      
      const heading = screen.getByText(/Schedule Recurrance/i);
      expect(heading).toBeInTheDocument();
    });
  
    test('shows error message when no recurrence type is selected', () => {
      render(
        <TimeContextProvider>
          <MainDatePicker />
        </TimeContextProvider>
      );
  
      // Initially, no recurrence type is selected
      const errorMessage = screen.getByText(/Select a Recurance type/i);
      expect(errorMessage).toBeInTheDocument();
    });
  
  });