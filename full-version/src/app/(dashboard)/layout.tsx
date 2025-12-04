import DashboardLayout from '@/layout/Dashboard';

// ==============================|| DASHBOARD LAYOUT ||============================== //

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
