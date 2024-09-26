// RecurrenceOptions.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTimeContext } from '@/app/hooks/timeContext';

const RecurrenceOptions = ({ selectedRecurrence, onChange }) => {
    const {setCurrActiveScreen} = useTimeContext();
  
    return (
        <Box sx={{display: {sm: 'block', md: 'flex'}}} className="items-center justify-between md:px-5 py-3" >
            <Box flex={1}>
                    
                <Typography variant='subheader'>
                    {
                     selectedRecurrence ? (
                         `Setting a ${selectedRecurrence} recurrance.`
                     ):(
                        "Select Recurrance Type"
                     )   
                    }
                </Typography>
                
            </Box>
            <Box flex={1} display={'flex'} columnGap={1} sx={{pt: {xs: 1}}} >
                {
                    !selectedRecurrence ? (
                        <>
                        <Button onClick={()=>onChange('daily')} className='button' size='small' fullWidth >Daily</Button>
                        <Button onClick={()=>onChange('weekly')} className='button' size='small' fullWidth >weekly</Button>
                        <Button onClick={()=>onChange('monthly')} className='button' size='small' fullWidth >monthly</Button>
                        <Button onClick={()=>onChange('yearly')} className='button' size='small' fullWidth >Yearly</Button>
                        </>
                    ):(
                        <>
                            <Button className='button px-8' >{selectedRecurrence}</Button>
                            <Button onClick={()=>{
                                onChange(null)
                            }} className='bg-red-500 px-8 text-white' >cancel</Button>
                        </>
                    )
                }
            </Box>
        </Box>
    );
};

export default RecurrenceOptions;
