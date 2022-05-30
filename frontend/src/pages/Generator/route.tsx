import { lazy } from 'react';
import KeyIcon from '@mui/icons-material/Key';
import { NavItemProps, RouteConfigProps } from '../../routes/routesConfig';
import { AppURLs } from '../../shared/constants';

export const generatorNavItem: NavItemProps = {
  id: 'generator',
  title: 'Gerador',
  url: AppURLs.GENERATOR,
  icon: <KeyIcon />,
  exact: true,
};

const generatorRoutes: RouteConfigProps[] = [
  {
    path: AppURLs.GENERATOR,
    component: lazy(() => import('.')),
    exact: true,
  },
];

export default generatorRoutes;
