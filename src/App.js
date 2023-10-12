import React,{useState} from 'react';
import './App.css';
import {BlockPicker} from 'react-color';

function App() 
{
  const[Color,setColor]=useState('#ccc')
  return (
    <div className="app">
      <h1>Color picker</h1>

      <div className='area' style={{backgroundColor: Color}}></div>
      
         <BlockPicker color={Color}
         onChangeComplete={color=>setColor(color.hex)}/>

<button className='ref-button'>Pick a color</button>
       

      

    </div>
  );
}

export default App;
