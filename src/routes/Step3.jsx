import { Link } from "react-router-dom";

export default function Step3() {

    function handleNextStep() {
        return
    }

    return (
        <div className="form-container">
        <h1 className="ff-sanserif">Pick add-ons</h1>

        <p className="ff-sanserif">Add-ons help enhance your gaming experience.</p>

        {/* insert content */}
        <div className="flex add-on-container">
            <div className="flex add-on-child">
                <div className="flex add-on-child-container">
                    <input type="checkbox"/>
                    <div className="flex add-on-text-container">
                        <h1 className="ff-sanserif">Online Service</h1>
                        <p className="ff-sanserif">Access to multiplayer games</p>
                    </div>
                </div>
                
                <span className="ff-sanserif add-on-fee">+$1/mo</span>
            </div>

            <div className="flex add-on-child">
                <div className="flex add-on-child-container">
                    <input type="checkbox"/>
                    <div className="flex add-on-text-container">
                        <h1 className="ff-sanserif">Larger Storage</h1>
                        <p className="ff-sanserif">Extra 1TB of cloud save</p>
                    </div>
                </div>
                
                <span className="ff-sanserif add-on-fee">+$2/mo</span>
            </div>

            <div className="flex add-on-child">
                <div className="flex add-on-child-container">
                    <input type="checkbox"/>
                    <div className="flex add-on-text-container">
                        <h1 className="ff-sanserif">Customizable profile</h1>
                        <p className="ff-sanserif">Custom theme on your profile</p>
                    </div>
                </div>
                
                <span className="ff-sanserif add-on-fee">+$2/mo</span>
            </div>
        </div>

        <div className="flex forward-back-btn" style={{
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <button className="ff-sanserif btn-back"><Link to="/step2">Go Back</Link></button>
            <button type="button" onClick={handleNextStep} className="next-step ff-sanserif"><Link to="/step4">Next Step</Link></button>
        </div>


        </div>
    )
    }
