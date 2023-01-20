import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

type Props = {};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props: Props) => {
  const [barData, setBarData] = useState({
    labels: [] as any[],
    datasets: [] as any[],
  });

  const [barOptions, setBarOptions] = useState({});

  const weekLabels: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    setBarData({
      labels: weekLabels,
      datasets: [
        {
          label: "Sales $",
          data: [18127, 49999, 19489, 45787, 22786, 34543, 19898],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
        },
      ] as any[],
    });
    setBarOptions({
      responsive: true,
      mainAspectRatio: "false",
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: "Sameer's Total Orders and Sales",
        },
      },
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[7-0vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={barData} options={barOptions} />
      </div>
    </>
  );
};

export default BarChart;
