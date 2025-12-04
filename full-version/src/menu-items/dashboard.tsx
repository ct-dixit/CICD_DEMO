import { NavItemType } from '@/types/menu';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard: NavItemType = {
  id: 'navigation',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      icon: 'ph ph-house-line',
      url: '/dashboard/default'
    }
  ]
};

export default dashboard;
