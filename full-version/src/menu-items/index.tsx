// project imports
import dashboard from './dashboard';
import other from './other';
import pages from './pages';
import uiComponents from './ui-components';

// types
import { NavItemType } from '@/types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, uiComponents, pages, other]
};

export default menuItems;
