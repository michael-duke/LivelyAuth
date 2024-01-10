'use client';
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();
  const handleOrder = () => router.push('/');
  return (
    <>
      <h1> Order Product</h1>
      <button
        onClick={handleOrder}
        className="rounded-md p-3 bg-gray-200 text-slate-600"
      >
        Place Order
      </button>
    </>
  );
}
