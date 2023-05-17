// import React from 'react'
import {useState} from 'react';


export default function NotFound() {

    
        const [selectedOption, setSelectedOption] = useState('option1');
      
        const handleSliderChange = (event) => {
          const value = event.target.value;
          setSelectedOption(value === '0' ? 'option1' : 'option2');
        };
    

   return (
    // <>Page Not Found</>
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step="1"
        value={selectedOption === 'option1' ? '0' : '1'}
        onChange={handleSliderChange}
      />
      <div className="slider-options">
        <span className={selectedOption === 'option1' ? 'active' : ''}>Option 1</span>
        <span className={selectedOption === 'option2' ? 'active' : ''}>Option 2</span>
      </div>
    </div>
   )


  




    
}