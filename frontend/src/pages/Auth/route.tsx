import LoginPage from '.';
import { RouteConfigProps } from '../../routes/routesConfig';
import { AppURLs } from '../../shared/constants';

const authRoutes: RouteConfigProps[] = [
  {
    path: AppURLs.LOGIN,
    component: () => <LoginPage />,
    exact: true,
  },
];

export default authRoutes;
