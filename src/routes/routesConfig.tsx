export interface NavItemProps {
  id: string;
  messageId: string;
  title: string;
  icon?: React.FC;
  exact?: boolean;
  url?: string;
  count?: number;
  color?: string;
  auth?: string[];
  children?: NavItemProps[] | NavItemProps;
}
