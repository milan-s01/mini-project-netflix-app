import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./signup.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
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

const SignupForm = () => {
    const navigate = useNavigate();
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('http://localhost:4000/users/', {
                name: values.username,   
                email: values.email,
                password: values.password
            });
            toast.success('Sign up successful');
        } catch (error) {
            console.log('error', error);
            toast.error('user already registered');
            navigate('/home')
        }
        setSubmitting(false);
    };
    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, isSubmitting, isValid, values }) => {
                console.log(errors, values)
                return (
                    <Form>
                        <div className='container'>
                            <div className='logo'>
                                <img src='https://i.ibb.co/r5krrdz/logo.png'></img>
                            </div>
                            <div className='body'>
                                <div className='formm'>
                                    <h1 className='sign'>Sign up</h1>
                                    <div className='content'>
                                        <Field className="input" type="text" name="username" placeholder="Username" />
                                        <CustomErrorMessage name="username" className="error" />
                                    </div>

                                    <div className='content'>
                                        <Field className="input" type="email" name="email" placeholder="Email " />
                                        <CustomErrorMessage name="email" className="error" />
                                    </div>

                                    <div className='content'>
                                        <Field className="input" type="password" name="password" placeholder="password" />
                                        <CustomErrorMessage name="password" className="error" />
                                    </div>

                                    <div className='content'>
                                        <Field className="input" type="password" name="confirmPassword" placeholder="confirmPassword" />
                                        <CustomErrorMessage name="confirmPassword" className="error" />
                                    </div>
                                    <button type="submit" className='btn' disabled={!isValid || isSubmitting}>Sign Up</button>
                                    {isValid && !isSubmitting && <SuccessAlert />}
                                    <ToastContainer />
                                    <div className='signup'>
                                        <p>Already have account ?</p>
                                    </div>
                                    <Link to="/" className='sign'>Sign in Now</Link>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
};

export default SignupForm;