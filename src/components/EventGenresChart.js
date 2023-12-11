import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      const data = genres
        .map((genre) => {
          const filteredEvents = events.filter((event) =>
            event.summary.includes(genre)
          );
          return {
            name: genre,
            value: filteredEvents.length,
          };
        })
        .filter((i) => i.value > 0);
      return data;
    };
    setData(getData());
  }, [events]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;

    return (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="50%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
