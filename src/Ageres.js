import PropTypes from 'prop-types';

const Ageres = ({ age }) => {
  return (
    <h4 className='mt-10 underline text-2xl font-bold dark:text-white'>
      You are {age.years} years old.
    </h4>
  );
};

Ageres.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
   
  }),
};

export default Ageres;