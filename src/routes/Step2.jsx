import React, { useState } from 'react';

export default function Step2() {



const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with the selected option
    console.log(selectedOption);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="button"
        className={selectedOption === 'option1' ? 'selected' : ''}
        onClick={() => handleOptionClick('option1')}
      >
        Option 1
      </button>
      <button
        type="button"
        className={selectedOption === 'option2' ? 'selected' : ''}
        onClick={() => handleOptionClick('option2')}
      >
        Option 2
      </button>
      <button
        type="button"
        className={selectedOption === 'option3' ? 'selected' : ''}
        onClick={() => handleOptionClick('option3')}
      >
        Option 3
      </button>
      <button type="submit">Submit</button>
    </form>
  )

}