import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { StaticTimePicker } from '@mui/x-date-pickers';

export default function SetTime({handleNext}) {

    const [value, setValue] = React.useState(dayjs());

    const handleTimeChange = (newValue) => {
      setValue(newValue);
    };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticTimePicker 
          value={value}
          onChange={handleTimeChange}
          onAccept={()=>handleNext('time',dayjs(value).format('hh:mm a') )}
          defaultValue={dayjs('2022-04-17T15:30')} 
        />
  </LocalizationProvider>
  )
}
