import SitesPage from '.';
import { NavItemProps, RouteConfigProps } from '../../routes/routesConfig';
import LanguageIcon from '@mui/icons-material/Language';

export const sitesNavItem: NavItemProps = {
  id: 'sites',
  title: 'Sites',
  url: '/sites',
  icon: <LanguageIcon />,
};

const sitesRoutes: RouteConfigProps[] = [
  {
    path: '/sites',
    component: <SitesPage />,
    exact: true,
  },
];

export default sitesRoutes;
