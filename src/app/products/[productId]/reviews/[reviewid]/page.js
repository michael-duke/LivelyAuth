'use client';
import { notFound } from 'next/navigation';

const getRandomInt = (count) => Math.floor(Math.random() * count);

export default function ReviewDetail({ params: { productId, reviewId } }) {
  const random = getRandomInt(2);
  if (random === 1)
    throw new Error(
      `Error loading review ${reviewId} for product ${productId}.`
    );

  if (+reviewId > 1000) notFound();
  return (
    <h2>
      Review {reviewId} for product {productId}
    </h2>
  );
}
