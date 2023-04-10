import React, { useContext } from 'react';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Login from '../pages/Login';
import { Home } from '../pages/Home';
import { SendContact } from '../pages/SendContact';
import { SendImage } from '../pages/SendImage';

import { AuthContext } from '../context/auth';

export function AppRouter() {
  const userContext = useContext(AuthContext);

  const PrivateRouter = () => {

    if (userContext?.isLogged) {
      return <Outlet />;
    }

    return <Login />;
  }

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRouter />} >
          <Route path='/' element={<Home/>} />
          <Route path='/message/massText' element={<SendContact />} />
          <Route path='/message/massImage' element={<SendImage />}/>
        </Route>
      </Routes>
    </Router>
  );
}