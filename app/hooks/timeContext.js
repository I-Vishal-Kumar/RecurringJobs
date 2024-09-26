import React, { createContext, useContext, useState } from 'react'

export const TimeContext = createContext(null);

export default function TimeContextProvider({children}) {

  const [currActiveScreen, setCurrActiveScreen] = useState(-1);

  const [result, setResult] = useState({
    time: '',
    days: [],
    dates: [],
    months: [],
  });

  const handleResultUpdate = (key, value) => {


    if(Object.keys(result).includes(key)){

      setResult(prev =>({...prev, [key]: value}));
     
    }
  }

  return (
    <TimeContext.Provider  value={{currActiveScreen, setCurrActiveScreen, result, handleResultUpdate}} >
        {children}
    </TimeContext.Provider>
  )
}

export function useTimeContext(){
    return useContext(TimeContext);
}