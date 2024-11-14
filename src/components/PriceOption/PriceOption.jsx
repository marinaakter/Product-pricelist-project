import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {name, monthlyPrice, features} = option
  return (
    <div className='bg-blue-500 text-white rounded-md p-4 flex flex-col'>
      <h2 className='text-center'>
        <span className='text-5xl'>${monthlyPrice}</span>
        <span className='text-2xl'>/mon</span>
      </h2>
      <h4 className='text-3xl my-5 text-center font-bold'>{name}</h4>
      <div className='p-6 flex-grow'>
      {
        features.map((feature, idx)=><Feature key={idx} feature={feature} ></Feature>)
      }
      </div>
      <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-bold rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Buy Now</button>
    </div>
  )
}
PriceOption.propTypes = {
  option: PropTypes.object,
  name: PropTypes.string,
  features: PropTypes.array,
};

export default PriceOption
