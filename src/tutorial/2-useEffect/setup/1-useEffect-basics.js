import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log("Call useEffect")
    if(value >= 1){
      document.title = `New Message (${value})`
    }
    
  }, [value])


  console.log("Render Component")
  return <>
  <h1>{value}</h1>
  <button className='btn' onClick={() => setValue(value + 1)}>click me</button>
  </>
};

export default UseEffectBasics;
