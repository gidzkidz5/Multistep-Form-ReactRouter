
import PropTypes from 'prop-types';


export default function AddOnSummary(props) {
    
    
    return(

    <div className="flex ff-sanserif bottom-summary-text">
        <h1>{props.addOn}</h1>
        <h2>+${props.cost}{props.duration}</h2>
    </div>

    )
}

AddOnSummary.propTypes = {
    addOn: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired
  };
  