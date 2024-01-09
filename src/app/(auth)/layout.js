'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  return (
    <>
      <nav>
        {navLinks.map(({ name, href }, idx) => (
          <Link
            key={idx}
            href={href}
            className={`${isActive(href) && 'font-bold text-white bg-orange-400'} w-max underline underline-offset-2 decoration-2 decoration-slate-300 block mt-2`}
          >
            {name}
          </Link>
        ))}
      </nav>
      {children}
    </>
  );
}
