import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function TodoChart({ data }) {
  const chartData = {
    labels: ['Ukonczone', 'Nieukonczone'],
    datasets: [
      {
        label: 'Todos',
        data: [data.completed, data.notCompleted],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)']
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Status wykoniania todos' },
      legend: { position: 'top' }
    }
  };

  return <Pie data={chartData} options={options} />;
}