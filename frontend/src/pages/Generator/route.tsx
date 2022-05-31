import { lazy } from 'react';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { NavItemProps, RouteConfigProps } from '../../routes/routesConfig';
import { AppURLs } from '../../shared/constants';

export const generatorNavItem: NavItemProps = {
  id: 'generator',
  title: 'Gerar senha',
  url: AppURLs.GENERATOR,
  icon: <AutoFixHighOutlinedIcon />,
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
