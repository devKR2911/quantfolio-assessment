import Card from "@/components/core/Card/Card";
import Paragraph from "@/components/core/Typography/Paragraph/Paragraph";
import Stack from "@core/Stack/Stack";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
const TwitterAnalysis = () => {
  const data = [
    { name: "Total Subscribers", value: 7459, color: "hsl(203deg 89% 53%)" },
    { name: "New Subscribers", value: 1452, color: "#00C49F" },
    { name: "Subscribers Left", value: 800, color: "#FFBB28" },
  ];

  return (
    <Card isClickable={false} type="twitter">
      <Stack>
        <Paragraph bold centered>
          Twitter Annual Analysis
        </Paragraph>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8" // Default fill, but overridden by Cell colors
              dataKey="value"
            >
              {data.map((entry) => (
                <Cell key={`cell-${entry.name.replaceAll(" ", "").toLowerCase()}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Stack>
    </Card>
  );
};

export default TwitterAnalysis;
