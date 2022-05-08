import { sitesNavItem } from '../pages/Sites/route';

export interface NavItemProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  exact?: boolean;
  url: string;
  count?: number;
  color?: string;
  auth?: string[];
  children?: NavItemProps[] | NavItemProps;
}

export interface RouteConfigProps {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}

export const navItems: NavItemProps[] = [sitesNavItem];
