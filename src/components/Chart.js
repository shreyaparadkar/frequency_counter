import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useWindowWidth from "../hooks/useWindowWidth";

const Chart = ({ data }) => { 
  const isMobile= useWindowWidth();

  return (
    <div
      style={{
        width: "95%",
        height:isMobile?700: 500,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout={isMobile ? "vertical" : "horizontal"}
          width={450}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 5,
            bottom: 20,
          }}
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor="#1e40af" stopOpacity={1} />
              <stop offset="95%" stopColor="#312e81" stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type={isMobile ? "number" : "category"}
            dataKey={isMobile ? null : "word"}
            label={{
              value: isMobile ? "Frequency" : "Words",
              position: "insideBottom",
              offset: -15,
              fill: "#c7d2fe",
            }}
            tick={{ stroke: "#CBD5E0" }}
          />
          <YAxis
            type={isMobile ? "category" : "number"}
            dataKey={isMobile ? "word" : null}
            label={{
              value: !isMobile ? "Frequency" : "Words",
              position: "insideLeft",
              fill: "#c7d2fe",
              angle: -90,
            }}
            tick={{ stroke: "#CBD5E0" }}
          />
          <Tooltip
            cursor={{ fill: "#1e293b" }}
            contentStyle={{ backgroundColor: "#1e293b", color: "#fff" }}
          />
          <Bar dataKey="freq" stroke="#4338ca" fill="url(#gradient)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


export default Chart;