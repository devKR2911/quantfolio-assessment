import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import Paragraph from "@core/Typography/Paragraph/Paragraph";
import Card from "@core/Card/Card";
import Stack from "@core/Stack/Stack";

const YoutubeAnalysis = () => {
  const data = [
    {
      key: "January",
      Youtube: 4000,
    },
    {
      key: "February",
      Youtube: 3000,
    },
    {
      key: "March",
      Youtube: 2000,
    },
    {
      key: "April",
      Youtube: 2780,
    },
    {
      key: "May",
      Youtube: 1890,
    },
    {
      key: "June",
      Youtube: 2390,
    },
    {
      key: "July",
      Youtube: 3490,
    },
    {
      key: "August",
      Youtube: 7456,
    },
    {
      key: "September",
      Youtube: 8564,
    },
    {
      key: "October",
      Youtube: 7425,
    },
    {
      key: "November",
      Youtube: 5634,
    },
    {
      key: "December",
      Youtube: 1456,
    },
  ];

  return (
    <Card isClickable={false} type="youtube">
      <Stack>
        <Paragraph bold centered>
          YouTube month wise analysis
        </Paragraph>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="key" tick={false} />
            <YAxis domain={[(dataMin) => dataMin - 500, (dataMax) => dataMax + 500]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Youtube" stroke="hsl(348deg 97% 39%)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Stack>
    </Card>
  );
};

export default YoutubeAnalysis;
