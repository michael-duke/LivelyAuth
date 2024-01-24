import Card from '@/components/card';
import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <Card className="relative bg-slate-300 text-white p-4">
      ArchivedNotifications
      <Link
        className="underline absolute bottom-2 right-2"
        href="/complex-dashboard"
      >
        Default
      </Link>
    </Card>
  );
}
