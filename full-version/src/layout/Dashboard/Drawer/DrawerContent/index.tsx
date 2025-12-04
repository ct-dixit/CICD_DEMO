// next
import { usePathname } from 'next/navigation';

import { useCallback, useEffect, useState } from 'react';

// project imports
import SimpleBarScroll from '@/components/third-party/SimpleBar';

// project imports
import Navigation from './Navigation';
import menuItems from '@/menu-items';

// types
import { NavItemType } from '@/types/menu';

interface Props {
  selectedItems: NavItemType | undefined;
  setSelectedItems: React.Dispatch<React.SetStateAction<NavItemType | undefined>>;
}

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

export default function DrawerContent({ selectedItems, setSelectedItems }: Props) {
  const [selectTab, setSelectTab] = useState<NavItemType | undefined>(menuItems.items[0]);

  const pathname = usePathname();

  const isActive = useCallback(
    (item: NavItemType) => {
      if (!item.url) return false;
      return pathname.toLowerCase().includes(item.url.toLowerCase());
    },
    [pathname]
  );

  const autoOpenParents = useCallback(
    (items?: NavItemType[]) => {
      const openMap: Record<string, boolean> = {};

      const findAndMark = (entries: NavItemType[] = []) => {
        entries.forEach((item) => {
          if (item.children) {
            const match = item.children.find((child) => isActive(child) || child.children?.some(isActive));
            if (match) openMap[item.id as string] = true;

            findAndMark(item.children);
          }
        });
      };

      findAndMark(items);
    },
    [isActive]
  );

  useEffect(() => {
    autoOpenParents(selectTab?.children);
  }, [autoOpenParents, selectTab]);

  return (
    <SimpleBarScroll style={{ height: 'calc(100vh - 74px)' }}>
      <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} setSelectTab={setSelectTab} />
    </SimpleBarScroll>
  );
}
