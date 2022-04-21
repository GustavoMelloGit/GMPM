export interface NavItemProps {
  id: string;
  message: string;
  title: string;
  icon?: React.FC;
  exact?: boolean;
  url?: string;
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
