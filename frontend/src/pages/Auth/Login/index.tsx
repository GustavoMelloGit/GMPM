import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = (props) => {
  return (
    <div>
      <p>Hello World</p>
      <Link to='/sites'>Sites</Link>
    </div>
  );
};
export default LoginPage;
