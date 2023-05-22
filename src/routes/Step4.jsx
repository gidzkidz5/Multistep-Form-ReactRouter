import { Link } from "react-router-dom";

export default function Step4() {

    function handleNextStep() {
        return
    }

    return (
        <div className="form-container">
        <h1 className="ff-sanserif">Finishing up</h1>

        <p className="ff-sanserif">Double-check everything looks OK before confirming</p>

{/* insert content */}
    <div className="flex summary-container">    
        <div className="flex top-summary-container">
            <div className="flex top-summary-container-child ff-sanserif">
                <div className="flex top-summary-text">
                    <h1>Arcade (Yearly)</h1>
                    <h2>Change</h2>
                </div>
                <div><h1 className="top-summary-cost ff-sanserif">$90/yr</h1></div>
            </div>

            <div className="line-break"></div>
           
            <div className="flex ff-sanserif bottom-summary-text">
                <h1>Online service</h1>
                <h2>+$10/yr</h2>
            </div>
            <div className="flex ff-sanserif bottom-summary-text">
                <h1>Larger storage</h1>
                <h2>+$20/yr</h2>
            </div>
        </div>

        <div className="flex summary-cost">
                <h1 className="ff-sanserif">Total (per year)</h1>
                <h2 className="ff-sanserif">$120/yr</h2>
        </div>

    </div>

        <div className="flex forward-back-btn" style={{
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <button className="ff-sanserif btn-back"><Link to="/step3">Go Back</Link></button>
            <button type="button" onClick={handleNextStep} className="next-step ff-sanserif">Confirm</button>
        </div>

        </div>
    )
    }
