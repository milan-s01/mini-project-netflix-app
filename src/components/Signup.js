import React from 'react';
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./signin.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { apiurl } from '../config/apiurl';
import {confign} from './service/authservice';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});
const CustomErrorMessage = ({ name, className }) => (
  <ErrorMessage name={name}>
    {errorMessage => <div className={className}>{errorMessage}</div>}
  </ErrorMessage>
);
const SuccessAlert = () => (
  <div className="success-alert">
    <i className="fa fa-check-circle"></i>
  </div>
);

const SigninForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    try 
    
    
    {
      if(values){
      const data = {
        email: values.email,
        password: values.password
      }
      const jwtToken = sessionStorage.getItem('jwtToken');
      const confign = {
        headers: { Authorization: `Bearer ${jwtToken}` }
      }
        const response = await axios.post(apiurl.loginurl, data, confign);
        if (response.status === 200) {
              const token = response.data.token;
              sessionStorage.setItem('jwtToken', token);
              // localStorage.setItem('jwtToken', token);
              navigate('/home')
        }
      }
    } catch (error) {
      console.log('error', error);
      toast.error('invalid credentials');
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isValid, isSubmitting, values }) => {
        console.log(errors, values);
        return (
          <Form>
            <div className='container'>
              <div className='logo'>
                <img src='https://i.ibb.co/r5krrdz/logo.png'></img>
              </div>
              <div className='body'>
                <div className='formm'>
                  <h1 className='sign'>Sign in</h1>
                  <div className='content'>
                    <Field className="input" type="email" name="email" placeholder="Email " />
                    <CustomErrorMessage name="email" className="error" />
                  </div>

                  <div className='content'>
                    <Field className="input" type="password" name="password" placeholder="Password" />
                    <CustomErrorMessage name="password" className="error" />
                  </div>
                  <button type="submit" className='btn' disabled={!isValid || isSubmitting} >Sign In</button>
                  {isValid && !isSubmitting && <SuccessAlert />}
                  <ToastContainer />
                  <div className='signup'>
                    <p>New to Netflix ?</p>
                  </div>
                  <Link to="/Signin" className='sign'>Sign Up Now</Link>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  )
}
export default SigninForm;  