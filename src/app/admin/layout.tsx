import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import AdminNav from './AdminNav';
import AuthProvider from './AuthProvider';

export const metadata = {
  title: 'Admin Panel | AdsAccount Pro',
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-950 flex">
        <AdminNav user={session.user} />
        <main className="flex-1 ml-0 lg:ml-64">
          <div className="pt-16 lg:pt-0">
            {children}
          </div>
        </main>
      </div>
    </AuthProvider>
  );
}
