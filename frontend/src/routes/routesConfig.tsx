import { FC, LazyExoticComponent } from 'react';
import { sitesNavItem } from '../pages/Sites/route';
import { generatorNavItem } from '../pages/Generator/route';

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
  component: LazyExoticComponent<FC<{}>> | (() => JSX.Element);
  exact?: boolean;
}

export const navItems: NavItemProps[] = [sitesNavItem, generatorNavItem];
