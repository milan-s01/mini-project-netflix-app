import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SigninForm from './components/Signup';
import SignupForm from './components/Signin';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Moviedetails from './components/moviedetails/Moviedetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SigninForm />} ></Route>
          <Route path='/Signin' element={<SignupForm />} ></Route>
          <Route path='/movie/:id' element={<Moviedetails></Moviedetails>} ></Route>
          <Route path='/Home' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} ></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App