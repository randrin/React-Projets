import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
} from "chart.js";

import { Bar, Doughnut, Pie, Line, Bubble } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart Bar Rest JS",
    },
  },
};
// const labels = Utils.months({count: 7});
const labelsBar = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
const labelsDoughnut = ["Red", "Blue", "Yellow"];
const dataBar = {
  labels: labelsBar,
  datasets: [
    {
      label: "Dataset 1",
      data: labelsBar.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labelsBar.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const dataDoughnut = {
  labels: labelsDoughnut,
  datasets: [
    {
      data: [
        faker.datatype.number({ min: 0, max: 100 }),
        faker.datatype.number({ min: 0, max: 100 }),
        faker.datatype.number({ min: 0, max: 100 }),
      ],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const dataLine = {
  labels: labelsBar,
  datasets: [
    {
      label: "My First Dataset",
      data: labelsBar.map(() => faker.datatype.number({ min: 0, max: 100 })),
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      tension: 0.1,
      hoverOffset: 4,
    },
    {
      label: "My Second Dataset",
      data: labelsBar.map(() => faker.datatype.number({ min: 0, max: 100 })),
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      tension: 0.1,
      hoverOffset: 4,
    },
  ],
};

const App = () => {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-md-6">
          <Bar options={options} data={dataBar} />
        </div>
        <div className="col-md-6">
          <Doughnut options={options} data={dataDoughnut} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Pie options={options} data={dataDoughnut} />
        </div>
        <div className="col-md-6">
          <Line options={options} data={dataLine} />
        </div>
      </div>
    </div>
  );
};

export default App;
