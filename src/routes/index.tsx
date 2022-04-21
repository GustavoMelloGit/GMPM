import React from 'react';
import { Routes, Route } from 'react-router-dom';
import authRoutes from '../pages/Auth/route';
import sitesRoutes from '../pages/Sites/route';

const routesConfig = [...authRoutes, ...sitesRoutes];

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route
          key={route.path}
          element={
            <React.Suspense fallback={<>...</>}>
              {route.component}
            </React.Suspense>
          }
          {...route}
        />
      ))}
    </Routes>
  );
};
export default AppRoutes;
