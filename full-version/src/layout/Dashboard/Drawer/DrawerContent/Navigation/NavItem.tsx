'use client';

// next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// types
import { LinkTarget, NavItemType } from '@/types/menu';

// project imports
import { handlerDrawerOpen } from '@/api/menu';

interface Props {
  item: NavItemType;
  level: number;
  isParents?: boolean;
}

// ==============================|| NAVIGATION - ITEM ||============================== //

export default function NavItem({ item }: Props) {
  const pathname = usePathname();
  const itemPath = item?.link || item?.url;

  let itemTarget: LinkTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  const isSelected = itemPath ? pathname === itemPath : false;

  return (
    <li className={`pc-item ${isSelected ? 'active' : ''}`}>
      <Link
        href={item?.url || '#'}
        className="pc-link"
        target={itemTarget}
        onClick={() => {
          handlerDrawerOpen(false);
        }}
      >
        {item?.icon && (
          <span className="pc-micon">
            <i className={item.icon} />
          </span>
        )}
        {item?.title && <span className="pc-mtext">{item.title}</span>}
      </Link>
    </li>
  );
}
