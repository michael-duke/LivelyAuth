import Link from "next/link";
export const metadata = {
  title: 'Products',
};

export default function ProductList() {
  return <>
  <ul className="list-disc flex flex-col gap-3 ml-6">
    <li className="cursor-pointer"><Link href="/products/1">Pr1</Link></li>
    <li className="cursor-pointer"><Link href="/products/2">Pr2</Link></li>
    <li className="cursor-pointer"><Link href="/products/3" replace>Pr3</Link></li>
  </ul>
  </>;
}
