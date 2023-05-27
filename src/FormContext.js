import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    tier: 'option1',
    monthly: true,
    1: false,
    2: false,
    3: false,
    addOns: [
      { id: 1, addOn: 'Online Service', monthCost: 1, yearCost: 10, month: true, selected: false},
      { id: 2, addOn: 'Larger Storage', monthCost: 2, yearCost: 20, month: true, selected: false },
      { id: 3, addOn: 'Customizable Profile', monthCost: 2, yearCost: 20, month: true, selected: false  }
    ]
  }
  );

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


