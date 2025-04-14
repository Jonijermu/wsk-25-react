import './App.css';
import Home from './views/Home.jsx';
import {BrowserRouter, Route, Routes} from 'react-router';
import Layout from './components/Layout.jsx';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';
import Login from './views/Login.jsx';
import {Logout} from './views/Logout.jsx';
import Register from './views/Register.jsx';

const App = () => {

  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/logout" element={<Logout/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
