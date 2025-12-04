import AuthLayout from '@/layout/Auth';

// ==============================|| DASHBOARD LAYOUT ||============================== //

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
