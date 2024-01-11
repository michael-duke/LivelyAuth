'use client';
export default function ErrorBoundary({ error: { message }, reset }) {
  return (
    <div>
      {message}
      <button onClick={reset} className="block bg-gray-200 border">
        Try again
      </button>
    </div>
  );
}
