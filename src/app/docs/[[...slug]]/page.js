export default function Docs({ params: { slug } }) {
  if (slug?.length === 2)
    return (
      <h2>
        Viewing feature {slug[0]} and concept {slug[1]}.
      </h2>
    );
  else if (slug?.length === 1) return <h2>Viewing feature {slug[0]}.</h2>;
  return <h1> Docs homepage</h1>;
}
