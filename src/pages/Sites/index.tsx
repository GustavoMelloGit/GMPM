import React from 'react';
import { Link } from 'react-router-dom';

const SitesPage: React.FC = () => {
  return (
    <div>
      <p>Hello Sites</p>
      <Link to='/'>Login</Link>
    </div>
  );
};
export default SitesPage;
