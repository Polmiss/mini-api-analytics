import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function PostsChart({ data }) {
  const chartData = {
    labels: data.map(user => user.name),
    datasets: [
      {
        label: 'Ile postow',
        data: data.map(user => user.posts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Posty na uzytkownika' }
    }
  };

  return <Bar data={chartData} options={options} />;
}