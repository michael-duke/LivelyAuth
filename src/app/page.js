import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello Obi Wan</h1>
      <Link
        href="/blog"
        className="underline underline-offset-2 decoration-slate- block mt-2"
      >
        Blog
      </Link>
      <Link
        href="/products"
        className="underline underline-offset-2 decoration-slate-600 block mt-2"
      >
        Products
      </Link>
    </main>
  );
}
