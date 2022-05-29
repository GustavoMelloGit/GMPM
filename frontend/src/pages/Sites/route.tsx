import { lazy } from 'react';
import { NavItemProps, RouteConfigProps } from '../../routes/routesConfig';
import LanguageIcon from '@mui/icons-material/Language';
import { AppURLs } from '../../shared/constants';

export const sitesNavItem: NavItemProps = {
  id: 'sites',
  title: 'Sites',
  url: AppURLs.SITES,
  icon: <LanguageIcon />,
};

const sitesRoutes: RouteConfigProps[] = [
  {
    path: AppURLs.SITES,
    component: lazy(() => import('./List')),
    exact: true,
  },
];

export default sitesRoutes;
