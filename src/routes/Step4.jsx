import { Link } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from '../FormContext';
import AddOnSummary from "../assets/components/AddOnSummary";

export default function Step4() {
    const { formData } = useContext(FormContext);

    function handleNextStep() {
        return
    }

   

    function optionCost() {
        switch (formData.tier) {
            case 'option1':
                if (!formData.monthly) {
                    return '$90'
                } else {
                    return '$9'
                }
            case 'option2':
                if (!formData.monthly) {
                    return '$120'
                } else {
                    return '$12'
                }
            case 'option3':
                if (!formData.monthly) {
                    return '$150'
                } else {
                    return '$15'
                }
        
            default:
                break;
        }
    }

    function optionChoice() {
        switch (formData.tier) {
            case 'option1':
                return 'Arcade'
            case 'option2':               
                return 'Advanced'
            case 'option3':                
                return 'Pro'
            default:
                break;
        }
    }

    function totalCost() {
        let sum = 0;
        let tierMonthCost;
        switch (formData.tier) {
            case 'option1':
                tierMonthCost = 9
                break;
            case 'option2':
                tierMonthCost = 12
                break;
            case 'option3':
                tierMonthCost = 15
                break;
            default:
                break;
        }
        if (!formData.monthly){
            sum = tierMonthCost * 10
        } else {
            sum = tierMonthCost
        }
        // tier cost
        

        formData.addOns.forEach(item => {
            if (item.selected) {
                if (formData.monthly) {
                    sum += item.monthCost
                } else {
                    sum += item.yearCost
                }
            }
        });

        return sum
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
                    <h1>{optionChoice()} ({formData.monthly ? 'Monthly' : 'Yearly'})</h1>
                    <h2><Link to="/step2">Change</Link></h2>
                </div>
                <div><h1 className="top-summary-cost ff-sanserif">{optionCost()}{formData.monthly ? '/mo' : '/yr'}</h1></div>
            </div>

            <div className="line-break"></div>
           {formData.addOns.map((item) => {
            if (item.selected) {
                return (
                    <AddOnSummary
                        key = {item.id}
                        addOn = {item.addOn}
                        cost = {formData.monthly ? item.monthCost : item.yearCost}
                        duration = {formData.monthly ? '/mo' : '/yr'}
                    />
                )
            }
           })}
           {/* <AddOnSummary 
                addOn = 'Online Services'
                cost = '10'
           /> */}
            {/* <div className="flex ff-sanserif bottom-summary-text">
                <h1>Online service</h1>
                <h2>+$10/yr</h2>
            </div> */}
            {/* <div className="flex ff-sanserif bottom-summary-text">
                <h1>Larger storage</h1>
                <h2>+$20/yr</h2>
            </div> */}
        </div>

        <div className="flex summary-cost">
                <h1 className="ff-sanserif">Total (per {formData.monthly ? 'month' : 'year'})</h1>
                <h2 className="ff-sanserif">${totalCost()}/{formData.monthly ? 'mo' : 'yr'}</h2>
        </div>

    </div>

        <div className="flex forward-back-btn" style={{
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <button className="ff-sanserif btn-back"><Link to="../step3">Go Back</Link></button>
            <Link to="../confirmation"><button  type="button" onClick={handleNextStep} className="next-step ff-sanserif">Confirm</button></Link>
        </div>

        </div>
    )
    }
