import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/Auth';
import SitesPage from '../pages/Sites';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthPage />} />
      <Route path='/sites' element={<SitesPage />} />
    </Routes>
  );
};
export default AppRoutes;
