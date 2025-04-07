import PropTypes from 'prop-types';

const Greeting = (props) => {
  return (
    <>
      <h1>Moi, {props.name}</h1>
      <p>how u doing</p>
    </>
  );
};

Greeting.prototype = {
  name: PropTypes.string.isRequired
};

export default Greeting;
