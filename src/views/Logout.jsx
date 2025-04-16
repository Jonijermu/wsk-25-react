import {useUserContext} from '../hooks/contextHooks.js';

const Logout = () => {
  const {handleLogout} = useUserContext();
  handleLogout();

  return <p>Logout page here</p>

}

export {Logout}
