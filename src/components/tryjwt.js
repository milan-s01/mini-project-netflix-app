const handleSubmit = async (values, { setSubmitting }) => {
    console.log('lfdjkaf');
    try {
      const response = await axios.post('http://localhost:4000/users/login', {
        email: values.email,
        password: values.password,
      })
    // try {
    //   const jwtToken = sessionStorage.getItem('jwtToken');
    //   const isValid = await axios.post('http://localhost:4000/users/validate-jwt', {
    //     token: jwtToken
    //   });
    //   if (isValid) {
    //     const response = await axios.post('http://localhost:4000/users/login', {
    //       email: values.email,
    //       password: values.password,
    //     });
    //     if (response.status === 200) {
    //       const token = response.data.token;
    //       sessionStorage.setItem('jwtToken', token);
    //       localStorage.setItem('jwtToken', token);
    //       navigate('/home');
    //     }
    //   }
    } catch (error) {
      console.log('error', error);
      toast.error('invalid credentials');
    }
    setSubmitting(false);
  };
