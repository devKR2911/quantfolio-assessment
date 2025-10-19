import Card from "@/components/core/Card/Card";
import Paragraph from "@/components/core/Typography/Paragraph/Paragraph";
import Stack from "@core/Stack/Stack";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const InstagramAnalysis = () => {
  const data = [
    { name: "Total Subscribers", value: 23500, color: "hsl(329deg 70% 58%)" },
    { name: "New Subscribers", value: 4300, color: "hsl(37deg 97% 70%)" },
    { name: "Subscribers Left", value: 800, color: "#007bff" },
  ];

  return (
    <Card isClickable={false} type="instagram">
      <Stack>
        <Paragraph bold centered>
          Instagram Annual Analysis
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

export default InstagramAnalysis;
