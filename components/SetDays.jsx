import React, { useState } from 'react';
import { Button, Box } from '@mui/material'; // Make sure to import Box and Button from MUI
import dayjs from 'dayjs';
import { ArrowRightAlt } from '@mui/icons-material';
// import weekday from 'dayjs/plugin/weekday'; // Import the weekday plugin


export default function SetDays({handleNext, children}) {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleCheck = (day) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };
  
  const addAll = () => {
    setSelectedDays(prev => {
        return Array.from({length: 7}, (_,i)=>(dayjs().day(i).format("ddd")))
            .map(day => !prev.includes(day) ? day : null ).filter(day => !!day);
      }
    );
  }

  return (
    <Box px={4} mt={4}>
        <Button sx={{textTransform: 'initial'}} onClick={addAll} className='bg-blue-500 py-1 text-white'>
           { selectedDays?.length === 7 ? 'Unselect All' : "Select all"}
        </Button>
        <Box className="h-full mt-8 justify-center items-center " display="flex" gap={1} flexWrap={'wrap'} >
            {Array.from({length: 7}, (_,i)=>(dayjs().day(i).format("ddd"))).map((day) => (
                <Button
                key={day}
                className={`${selectedDays.includes(day) ? 'selected_button' : 'button'}`} // Add 'checked' class if the day is selected
                onClick={() => handleCheck(day)}>
                {day}
                </Button>
            ))}
        </Box>

        <Box onClick={()=>handleNext("days", selectedDays)} mt={10} className="flex justify-center">
            {
              children
            }
        </Box>
    </Box>
  );
}
