import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DeliveryChartProps {
  className?: string;
}

export const DeliveryChart: React.FC<DeliveryChartProps> = ({ className }) => {
  const data = {
    labels: ['Mohammadpur', 'Mohammadpur', 'Dhaka GPO', 'Dhaka GPO', 'Chaktai TSO', 'Dhaka GPO'],
    datasets: [
      {
        label: 'Delivery Progress',
        data: [65, 59, 80, 81, 56, 55],
        fill: true,
        borderColor: '#006fee',
        backgroundColor: 'rgba(0, 111, 238, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#006fee',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#006fee',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#535862',
          font: {
            size: 12,
          },
        },
      },
      y: {
        display: false,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    elements: {
      point: {
        hoverRadius: 6,
      },
    },
  };

  return (
    <div className={className}>
      <Line data={data} options={options} />
    </div>
  );
};