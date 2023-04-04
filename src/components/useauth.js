import { useState, useEffect } from 'react';

function useAuth() {
  const [auth, setAuth] = useState(false);

  const token = sessionStorage.getItem('jwtToken');

  useEffect(() => {
    if (token) {
      setAuth(true);
      sessionStorage.setItem('jwtToken', token);
    } else {
      setAuth(false);
      sessionStorage.clear();
    }
  }, [])

  return auth;
}

export default useAuth;




