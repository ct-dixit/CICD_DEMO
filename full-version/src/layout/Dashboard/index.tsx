'use client';

import { ReactNode } from 'react';

// project imports
import Breadcrumbs from '@/components/Breadcrumbs';
import MainDrawer from './Drawer';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
}

// ==============================|| DASHBOARD LAYOUT ||============================== //

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <MainDrawer />
      <Header />
      <div className="pc-container">
        <div className="pc-content">
          <Breadcrumbs />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
