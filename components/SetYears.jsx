import React, { useState } from 'react';
import { Button, Box } from '@mui/material'; // Make sure to import Box and Button from MUI
import dayjs from 'dayjs';
import { ArrowRightAlt } from '@mui/icons-material';


export default function SetYears({handleNext, children}) {

  const [selectedMonths, setSelectedMonths] = useState([]);

  const handleCheck = (month) => {
    setSelectedMonths(prev =>
      prev.includes(month) ? prev.filter(d => d !== month) : [...prev, month]
    );
  };
  
  const addAll = () => {
    setSelectedMonths(prev => {
        return Array.from({length: 12}, (_,i)=>(dayjs().month(i).format("MMM")))
            .map(month => !prev.includes(month) ? month : null ).filter(month => !!month);
      }
    );
  }

  return (
    <Box px={4} mt={4}>
        <Button sx={{textTransform: 'initial'}} onClick={addAll} className='bg-blue-500 py-1 text-white'>
           { selectedMonths?.length === 12 ? 'Unselect All' : "Select all"}
        </Button>
        <Box className="h-full mt-8 justify-center items-center " display="flex" gap={1} flexWrap={'wrap'} >
            {Array.from({length: 12}, (_,i)=>(dayjs().month(i).format("MMM"))).map((month) => (
                <Button
                  key={month}
                  className={`${selectedMonths.includes(month) ? 'selected_button' : 'button'}`} // Add 'checked' class if the month is selected
                  onClick={() => handleCheck(month)}>
                  {month}
                </Button>
            ))}
        </Box>

        <Box onClick={()=>handleNext("months", selectedMonths)} mt={10} className="flex justify-center">
            {children}
        </Box>
    </Box>
  );
}
