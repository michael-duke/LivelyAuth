export const metadata = {
  title: {
    absolute: 'About Lively',
  },
};

export default function About() {
  return (
    <>
      <div className="bg-green-300 border-2 border-purple-700 flex items-center p-3">
        <span className="border">Hello</span>
        <span className="ml-3 border">Darth Vader</span>
      </div>
      <h1 className="text-amber-400 font-semibold">Hello Luke</h1>
    </>
  );
}
