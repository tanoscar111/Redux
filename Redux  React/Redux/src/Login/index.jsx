import React from 'react';
import history from '../history';

function Login(props) {
  return (
    <div>
      Login
      <button
        className="btn btn-primary"
        onClick={() => history.push('/login')}
      >
        Đăng nhập
      </button>
    </div>
  );
}

export default Login;
