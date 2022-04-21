import React from 'react';
import { RouteConfigProps } from '../../routes/routesConfig';
import LoginPage from './Login';

const authRoutes: RouteConfigProps[] = [
  {
    path: '/',
    component: <LoginPage />,
    exact: true,
  },
];

export default authRoutes;
