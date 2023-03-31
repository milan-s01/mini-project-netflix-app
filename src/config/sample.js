const handleSubmit = async (values, { setSubmitting }) => {
  try {
    const response = await axios.post('http://localhost:4000/users/login', {
      email: values.email,
      password: values.password,
    })
    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      navigate('/home');
    }
  } catch (error) {
    console.log('error', error);
    toast.error('invalid credentials');
  }
  setSubmitting(false);
};


import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
  },
});

export default instance;
