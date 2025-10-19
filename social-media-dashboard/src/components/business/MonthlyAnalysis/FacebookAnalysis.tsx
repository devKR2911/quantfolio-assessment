import Card from "@/components/core/Card/Card";
import Stack from "@/components/core/Stack/Stack";
import Paragraph from "@/components/core/Typography/Paragraph/Paragraph";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const FacebookAnalysis = () => {
  const data = [
    {
      name: "January",
      Facebook: 4000,
    },
    {
      name: "February",
      Facebook: 3000,
    },
    {
      name: "March",
      Facebook: 2000,
    },
    {
      name: "April",
      Facebook: 2780,
    },
    {
      name: "May",
      Facebook: 1890,
    },
    {
      name: "June",
      Facebook: 2390,
    },
    {
      name: "July",
      Facebook: 3490,
    },
    {
      name: "August",
      Facebook: 4698,
    },
    {
      name: "September",
      Facebook: 6538,
    },
    {
      name: "October",
      Facebook: 4786,
    },
    {
      name: "November",
      Facebook: 5897,
    },
    {
      name: "December",
      Facebook: 2475,
    },
  ];
  return (
    <Card isClickable={false} type="facebook">
      <Stack>
        <Paragraph bold centered>
          Facebook Month Wise Followers
        </Paragraph>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={false} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Facebook" fill="hsl(208deg 92% 53%)" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          </BarChart>
        </ResponsiveContainer>
      </Stack>
    </Card>
  );
};

export default FacebookAnalysis;
