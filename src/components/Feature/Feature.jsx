import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
  return (
    <div className='flex gap-4 items-center'>
        <FaCheckCircle  /> <p>{feature}</p>
    </div>
  )
}

Feature.propTypes = {
    feature: PropTypes.string,
  };
export default Feature
