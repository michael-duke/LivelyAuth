import Card from "@/components/card";
import Link from "next/link";

export default function Notifications(){
  return <Card className="relative bg-red-300 text-white p-4"> Notifications
  <Link className="underline absolute bottom-2 right-2" href="/complex-dashboard/notifications/archived">Archived</Link>
  </Card>
}