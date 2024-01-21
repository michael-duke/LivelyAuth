export const generateMetadata = async ({ params: { productId } }) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`Google Pixel ${productId}`), 2000);
  });
  return {
    title: `Product # ${title}`,
  };
};

export default function ProductDetails({ params: { productId } }) {
  return <h1>Details about Product {productId}</h1>;
}
