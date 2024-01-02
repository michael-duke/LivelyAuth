import LineChart from '../../components/line-chart';

function BarChart() {
  return <h1>Bar Chart</h1>;
}

export default function Dashboard() {
  return (
    <>
      <h1 className="text-blue-600 text-2xl mb-3 underline decoration-wavy decoration-purple-800">
        Dashboard
      </h1>
      <BarChart />
      <LineChart />
    </>
  );
}
