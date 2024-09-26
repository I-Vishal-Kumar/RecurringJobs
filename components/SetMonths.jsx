import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material'; // Make sure to import Box and Button from MUI
import dayjs from 'dayjs';
import { ArrowRightAlt, Circle } from '@mui/icons-material';
// import weekday from 
export default function SetMonths({handleNext, children}) {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleCheck = (day) => {
    setSelectedDates(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };
  
  const addAll = () => {
    setSelectedDates(prev => {
        return Array.from({length: 31}, (_,i)=>i)
            .map(day => !prev.includes(day) ? day : null ).filter(day => day !== null );
      }
    );
  }

  return (
    <Box px={4} mt={4}>
        <Button sx={{textTransform: 'initial'}} onClick={addAll} className='bg-blue-500 py-1 text-white'>
           { selectedDates?.length === 31 ? 'Unselect All' : "Select all"}
        </Button>
        <Box className="h-full mt-8 justify-center items-center " display="flex" gap={1.25} flexWrap={'wrap'} >
            {Array.from({length: 31}, (_,i)=>i).map((date) => (
                <Button
                  key={date}
                  size='small'
                  className={
                    `
                    ${selectedDates.includes(date) ? 'selected_button' : 'button'}
                    ${[28,29,30,31].includes(date) && "piculiar_date"}
                    `} // Add 'checked' class if the day is selected
                  onClick={() => handleCheck(date)}>
                  {date}
                </Button>
            ))}
        </Box>
        <Box mt={2} className="flex gap-x-2 items-center ">
          <Circle sx={{
            color: '#7a38ff'
          }} />
          <ArrowRightAlt/>
          <Typography variant='caption'>Dates may vary each month.</Typography>
        </Box>
        <Box onClick={()=>handleNext("dates", selectedDates)} mt={5} className="flex justify-center">
            {
              children
            }
        </Box>
    </Box>
  )
}
