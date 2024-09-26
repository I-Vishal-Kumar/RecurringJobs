// MainDatePicker.js
import React, { useState } from 'react';
import RecurrenceOptions from "@/components/RecurranceOptions";
import { Box, Button, Container, Typography } from '@mui/material';
import { useTimeContext } from '@/app/hooks/timeContext';
import SetTime from './SetTime';
import SetDays from './SetDays';
import SetMonths from './SetMonths';
import SetYears from './SetYears';
import { ArrowRightAlt } from '@mui/icons-material';

const MainDatePicker = () => {
   
    const {currActiveScreen, setCurrActiveScreen, handleResultUpdate} = useTimeContext();
    const [showResult , setShowResult] = useState(false);
    const [choseRecurrType, setRecurrType] = useState(null);

    const ActiveTab = [
        SetTime,
        SetDays,
        SetMonths,
        SetYears,
    ][currActiveScreen]
 
    const handleNext = (key, value) => {

        handleResultUpdate(key, value);

        if(key === 'time'){
            setShowResult(true);
            return;
        }

        setCurrActiveScreen(prev => {
            if(currActiveScreen >= 1){
                const nextScreen = currActiveScreen === 2 ? 2 : 1;
                return (prev - nextScreen)
            }
       })

    }

    const handleRecurrChange = (type) => {
        const activeScreen = {
            daily: 0,
            weekly: 1,
            monthly: 2,
            yearly: 3
        }[type]

        setCurrActiveScreen(activeScreen);
        setRecurrType(type);
    }
    
    if(showResult) return (
       <Result recurrenceType={choseRecurrType}>
            <Button className='button' onClick={()=>{
                setRecurrType(null);
                setShowResult(false);
                setCurrActiveScreen(-1);
            }}>Reset</Button>
        </Result>
    )

    return (
        <Container disableGutters >
            <Box boxShadow={1} px={3} className="flex items-center py-4">
                <Typography variant='h5' fontWeight={'bold'} className='text-blue-600' >Schedule Recurrance</Typography>
            </Box>
            <Box px={4} mt={2}>
                <RecurrenceOptions selectedRecurrence={choseRecurrType} onChange={handleRecurrChange} />
            </Box>
            {
                ActiveTab ? (
                    <ActiveTab handleNext={handleNext} >
                        <Button  sx={{
                                backgroundColor: '#34D399', // Equivalent to Tailwind's bg-green-400
                                px: 10,
                                fontWeight: 'bold',
                                fontSize: '0.875rem', // Equivalent to text-sm
                                color: '#191717'
                            }}>
                            Next
                            <ArrowRightAlt/>
                        </Button>
                    </ActiveTab> 
                ):(
                    <Box className='h-[50vh] flex justify-center items-center'>
                        <Typography color='error'>Select a Recurance type.</Typography>
                    </Box>
                )
            }
            
        </Container>
    )

};

export default MainDatePicker;


function Result ({children, recurrenceType}){

    const {result} = useTimeContext();
    const { time, days, dates, months } = result;

    let message = `You have set a recurrence for ${recurrenceType}. `;
  
    if (recurrenceType === 'daily') {
      message += `Every day at ${time}.`;
    } 
    else if (recurrenceType === 'weekly') {
      if (days.length === 7) {
        message += `Every day of the week at ${time}.`;
      } else {
        message += `On ${days.join(', ')} at ${time}.`; // Using formatted day names from result.days
      }
    } 
    else if (recurrenceType === 'monthly') {
      if (dates.length === 31) {
        message += `Every day of the month at ${time}.`;
      } else {
        message += `On the ${dates.join(', ')} of the month at ${time}.`;
      }
    } 
    else if (recurrenceType === 'yearly') {
      if (months.length === 12) {
        message += `Every month at ${time}.`;
      } else {

        message += `On the months: ${months.join(', ')}.`;
  
        if (dates.length) {
            if(dates.length === 31){
                message += ` Every day`;
            }else {
                message += ` On the ${dates.join(', ')} at ${time}.`;
            }
        }
      }
    }
  
    return (
        <Box className="flex justify-center items-center h-screen flex-col px-4">
            <Typography>{message}</Typography>
            {children}
        </Box>
        )
  };