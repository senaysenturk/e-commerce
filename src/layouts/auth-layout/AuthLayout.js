import React from 'react'

import Login from '../../pages/auth/login/Login';
import SignUp from '../../pages/auth/sign-up/SignUp';

export const AuthLayout = () => {
  return (
    <div>
      <Login />
      <SignUp/>
    </div>
  )
}

export default AuthLayout;
