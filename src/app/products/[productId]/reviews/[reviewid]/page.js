export default function ReviewDetail({ params: { productId, reviewId } }) {
  return (
    <h2>
      Review {reviewId} for product {productId}
    </h2>
  );
}
