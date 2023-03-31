import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import SigninForm from './components/Signup';
import SignupForm from './components/Signin';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SigninForm />} />
          <Route path='/Signin' element={<SignupForm />} />
          <PrivateRoute path='/Home' element={<Home />} isAuthenticated={isAuthenticated} />
          {/* Redirect to Signin page if user is not authenticated */}
          <Route path='*' element={<Redirect to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
