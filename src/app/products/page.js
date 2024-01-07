export const metadata = {
  title: 'Products',
};

export default function ProductList() {
  return <>
  <ul className="list-disc flex flex-col gap-3 ml-6">
    <li className="cursor-pointer">Pr1</li>
    <li className="cursor-pointer">Pr2</li>
    <li className="cursor-pointer">Pr3</li>
  </ul>
  </>;
}
