import { lazy } from 'react';
import { RouteConfigProps } from '../../routes/routesConfig';

const authRoutes: RouteConfigProps[] = [
  {
    path: '/',
    component: lazy(() => import('./Login')),
    exact: true,
  },
];

export default authRoutes;
