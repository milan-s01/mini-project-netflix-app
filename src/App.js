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
import Watch from './components/watch/Watch';
import Selectgen from './components/selectgen/Selectgen';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SigninForm />} ></Route>
          <Route path='/Signin' element={<SignupForm />} ></Route>
          <Route path='/movie/:id' element={<Moviedetails></Moviedetails>} ></Route>
          <Route path='/genre/:id' element={<Selectgen></Selectgen>}></Route>
          <Route path='/Home' element={
            <PrivateRoute>
              <Home />
              {/* <Watch></Watch> */}
            </PrivateRoute>} ></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App