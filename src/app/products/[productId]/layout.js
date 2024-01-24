const getRandomInt = (count) => Math.floor(Math.random() * count);

export default function ProductDetailLayout({
  children,
  params: { productId },
}) {
  const random = getRandomInt(2);
  if (random === 1) throw new Error(`Error loading product ${productId}.`);

  return (
    <>
      {children}
      <h2 className="mx-auto">Featured Products</h2>
    </>
  );
}
