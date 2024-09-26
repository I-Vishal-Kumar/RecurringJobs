import { Box, Button } from '@mui/material'
import React from 'react'

export default function RenderBlocks({data, handler, ...props}) {
  return (
    <Box display={'flex'} flexWrap={'wrap'} px={4} {...props}>
        {
            data.map((item, idx) => (
                <Button className='button text-white' key={idx} >{item}</Button>
            ))
        }
    </Box>
  )
}
