'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Pages that should not show the global header/footer
  const excludeHeaderFooter = ['/dashboard', '/sign-in'];
  const shouldShowHeaderFooter = !excludeHeaderFooter.includes(pathname);

  return (
    <>
      {shouldShowHeaderFooter && <Header />}
      <main className={shouldShowHeaderFooter ? "min-h-screen" : ""}>{children}</main>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}
