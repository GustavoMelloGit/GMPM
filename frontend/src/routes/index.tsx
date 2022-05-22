import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../components/Layout';
import authRoutes from '../pages/Auth/route';
import sitesRoutes from '../pages/Sites/route';

const routesConfig = [...sitesRoutes];
const routesWithoutLayout = [...authRoutes];

const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<>...</>}>
      <Routes>
        {routesWithoutLayout.map((route) => {
          const Component = route.component;
          return <Route key={route.path} element={<Component />} {...route} />;
        })}
        {routesConfig.map((route) => {
          const Component = route.component;
          return (
            <Route
              key={route.path}
              element={
                <AppLayout>
                  <Component />
                </AppLayout>
              }
              {...route}
            />
          );
        })}
      </Routes>
    </React.Suspense>
  );
};
export default AppRoutes;
