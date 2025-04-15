import LoginForm from '../components/LoginForm.jsx';
import RegisterForm from '../components/RegisterForm.jsx';
import {useState} from 'react';

const Login = () => {
  const [formToggle, setFormToggle] = useState(true);

  const clickHandler = () => {
      setFormToggle(!formToggle)
  };
  return (
    <>
      {formToggle ? <LoginForm /> : <RegisterForm />}
      <button onClick={clickHandler}>
        {formToggle ? 'or register' : 'login'}
      </button>
    </>
  );
};

export default Login;
