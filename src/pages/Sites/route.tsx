import React from 'react';
import SitesPage from '.';
import { RouteConfigProps } from '../../routes/routesConfig';

const sitesRoutes: RouteConfigProps[] = [
  {
    path: '/sites',
    component: <SitesPage />,
    exact: true,
  },
];

export default sitesRoutes;
