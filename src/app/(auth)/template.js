'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const [input, setInput] = useState('');
  const isActive = (href) => pathname === href;

  return (
    <>
      <div>
        <input value={input} className="border border-gray-300 mt-2" type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
      <nav>
        {navLinks.map(({ name, href }, idx) => (
          <Link
            key={idx}
            href={href}
            className={`${
              isActive(href) && 'font-bold text-white bg-orange-400 no-underline'
            } w-max underline underline-offset-2 decoration-2 decoration-slate-300 block mt-2`}
          >
            {name}
          </Link>
        ))}
      </nav>
      {children}
    </>
  );
}
