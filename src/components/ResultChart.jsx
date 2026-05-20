import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const resultData = [
  {
    id: 1,
    name: "Rahim",
    physics: 85,
    chemistry: 78,
  },
  {
    id: 2,
    name: "Karim",
    physics: 72,
    chemistry: 81,
  },
  {
    id: 3,
    name: "Sakib",
    physics: 90,
    chemistry: 88,
  },
  {
    id: 4,
    name: "Nadia",
    physics: 67,
    chemistry: 74,
  },
  {
    id: 5,
    name: "Mim",
    physics: 95,
    chemistry: 91,
  },
  {
    id: 6,
    name: "Jahid",
    physics: 80,
    chemistry: 70,
  },
  {
    id: 7,
    name: "Tanvir",
    physics: 76,
    chemistry: 84,
  },
  {
    id: 8,
    name: "Priya",
    physics: 89,
    chemistry: 86,
  },
  {
    id: 9,
    name: "Rafi",
    physics: 60,
    chemistry: 65,
  },
  {
    id: 10,
    name: "Sumaiya",
    physics: 92,
    chemistry: 94,
  },
];

const ResultChart = () => {
  return (
    <div>
      <LineChart width={700} height={400} data={resultData}>
        {/* background grid */}
        <CartesianGrid strokeDasharray="3 3" />

        {/* X Axis */}
        <XAxis dataKey="name" />

        {/* Y Axis */}
        <YAxis />

        {/* Hover Tooltip */}
        <Tooltip />

        {/* Physics Line */}
        <Line
          type="monotone"
          dataKey="physics"
          stroke="#8884d8"
          strokeWidth={3}
        />

        {/* Chemistry Line */}
        <Line
          type="monotone"
          dataKey="chemistry"
          stroke="#82ca9d"
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
};

export default ResultChart;
