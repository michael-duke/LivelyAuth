import Link from 'next/link';

export default function F4() {
  return (
    <>
      <h1>F4 Page</h1>
      <div className="w-max flex gap-x-6 border px-2">
        <Link
          className="underline decoration-wavy decoration-slate-700"
          href="/f1/f3"
        >
          F3 Page
        </Link>
        <Link
          className="underline decoration-wavy decoration-red-700"
          href="/about"
        >
          About Page
        </Link>
      </div>
    </>
  );
}
