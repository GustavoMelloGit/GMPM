import { lazy } from 'react';
import { RouteConfigProps } from '../../routes/routesConfig';
import { AppURLs } from '../../shared/constants';

const authRoutes: RouteConfigProps[] = [
  {
    path: AppURLs.LOGIN,
    component: lazy(() => import('.')),
    exact: true,
  },
];

export default authRoutes;
