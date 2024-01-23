'use client';
export default function ErrorBoundary({ error: { message } }) {
  return <div>{message}</div>;
}
