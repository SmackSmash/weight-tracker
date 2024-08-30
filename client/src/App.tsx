import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      color: 'white',
      text: 'Weight Tracker'
    },
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      suggestedMax: 100,
      suggestedMin: 60
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Weight (kg)',
      data: [93, 92, 91, 91, 90, 89, 88],
      borderColor: '#5DE4C7',
      backgroundColor: '#5DE4C7',
      yAxisID: 'y'
    }
  ]
};

const App = () => {
  return (
    <div className='w-full h-full'>
      <h1>Weight Tracker</h1>
      <Line options={options} data={data} />
    </div>
  );
};

export default App;
