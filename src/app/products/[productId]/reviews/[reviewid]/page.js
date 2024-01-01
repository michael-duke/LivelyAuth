import { notFound } from 'next/navigation';

export default function ReviewDetail({ params: { productId, reviewId } }) {
  if (+reviewId > 1000) notFound();
  return (
    <h2>
      Review {reviewId} for product {productId}
    </h2>
  );
}
