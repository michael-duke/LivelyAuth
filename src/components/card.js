export default function Card({ children, className }) {
  return (
    <div className={`${className} p-[100px] m-3 border border-gray-400 flex flex-col items-center justify-center shadow-md shadow-black/20`}>
      {children}
    </div>
  );
}
