// step 1
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { FormContext } from '../FormContext';


export default function Home() {
    const [error, setError] = useState({})

    function handleNextStep(e) {
        const errorName = document.getElementById('error1');
        const errorEmail = document.getElementById('error2');
        const errorPhone = document.getElementById('error3');

        let errors = {}
        
        if (!formData.fullName){
            e.preventDefault();
            errors.fullName = 'This field is required'
            errorName.classList.remove('hide')
        }

        if (!formData.email){
            e.preventDefault();
            errors.email = 'This field is required'
            errorEmail.classList.remove('hide')

        }

        if (!formData.phone){
            e.preventDefault();
            errors.phone = 'This field is required'
            errorPhone.classList.remove('hide');
        }

        if (Object.keys(errors).length > 0) {
            setError(errors);
        }


    }

    const { formData, updateFormData } = useContext(FormContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
        console.log(formData[name]);
  };

    return (
    <div className="form-container">
        <h1 className="ff-sanserif">Personal info</h1>

        <p className="ff-sanserif">Please provide your name, email address, and phone number</p>
        <form className="flex step1-form">
            <label htmlFor="fullName"><span className="step1-label ff-sanserif">Name</span></label>
            <input type="text" id="name" name="fullName" placeholder="e.g. Stephen King" 
                value={formData.fullName || ''} 
                onChange={handleInputChange}

            />
            <span className="ff-sanserif error" id="error1">{error.fullName}</span>

            <label htmlFor="email"><span className="step1-label ff-sanserif">Email Adress</span></label>
            <input type="text" id="email" name="email" placeholder="e.g. stephenking@lorem.com"
                value={formData.email || ''}
                onChange={handleInputChange}
            />
            <span className="ff-sanserif error" id="error2">{error.email}</span>


            <label htmlFor="phone"><span className="step1-label ff-sanserif">Phone Number</span></label>
            <input type="text" id="phone" name="phone" placeholder="e.g. +1 234 567 890 "
                value={formData.phone || ''}
                onChange={handleInputChange}
            />
            <span className="ff-sanserif error" id="error3">{error.phone}</span>

            <div className="flex" style={{justifyContent: 'flex-end'}}>
            <Link to="/step2"><button type="button" onClick={handleNextStep} className="next-step next-step1 ff-sanserif">Next Step</button></Link>
            </div>
        </form>
    </div>
)
}