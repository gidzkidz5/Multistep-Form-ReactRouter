import { useContext } from 'react';
import { FormContext } from '../FormContext';
import { Link } from "react-router-dom";

export default function Step3() {
    const { formData, updateFormData } = useContext(FormContext);

    function handleCheck(option) {
        updateFormData({[option]: !formData[option]})
        // updateFormData({addOns: ![option].selected })
        updateFormData({
            addOns: formData.addOns.map((addOn, index) =>
              index+1 === option ? { ...addOn, selected: !addOn.selected } : addOn
            )
          });
          

    
    }
// 
//     
    function handleNextStep() {
        return
    }

    return (
        <div className="form-container">
        <h1 className="ff-sanserif">Pick add-ons</h1>

        <p className="ff-sanserif">Add-ons help enhance your gaming experience.</p>

        {/* insert content */}
        <div className="flex add-on-container">
            <div className={(formData[1]) ? "flex add-on-child checked" : 'flex add-on-child'} onClick={()=>handleCheck(1)}>
                <div className="flex add-on-child-container">
                    <input type="checkbox" checked={formData[1]} onChange={()=>handleCheck(1)}/>
                    <div className="flex add-on-text-container">
                        <h1 className="ff-sanserif">Online Service</h1>
                        <p className="ff-sanserif">Access to multiplayer games</p>
                    </div>
                </div>
                
                <span className="ff-sanserif add-on-fee">+${(formData.monthly) ? '1/mo' : '10/yr'}</span>
            </div>

            <div className={(formData[2]) ? "flex add-on-child checked" : 'flex add-on-child'} onClick={()=>handleCheck(2)}>
                <div className="flex add-on-child-container">
                    <input type="checkbox" checked={formData[2]} onChange={()=>handleCheck(2)}/>
                    <div className="flex add-on-text-container">
                        <h1 className="ff-sanserif">Larger Storage</h1>
                        <p className="ff-sanserif">Extra 1TB of cloud save</p>
                    </div>
                </div>
                
                <span className="ff-sanserif add-on-fee">+${(formData.monthly) ? '2/mo' : '20/yr'}</span>
            </div>

            <div className={(formData[3]) ? "flex add-on-child checked" : 'flex add-on-child'} onClick={()=>handleCheck(3)}>
                <div className="flex add-on-child-container">
                    <input type="checkbox" checked={formData[3]} onChange={()=>handleCheck(3)}/>
                    <div className="flex add-on-text-container">
                        <h1 className="ff-sanserif">Customizable profile</h1>
                        <p className="ff-sanserif">Custom theme on your profile</p>
                    </div>
                </div>
                
                <span className="ff-sanserif add-on-fee">+${(formData.monthly) ? '2/mo' : '20/yr'}</span>
            </div>
        </div>

        <div className="flex forward-back-btn" style={{
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <button className="ff-sanserif btn-back"><Link to="/step2">Go Back</Link></button>
            <Link to="/step4"><button type="button" onClick={handleNextStep} className="next-step ff-sanserif">Next Step</button></Link>
        </div>


        </div>
    )
    }
