import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Trend = ({ data }) => {
  const labels = data.map((item) => item.name);
  const price = data.map((item) => item.current_price);
  const pieData = {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data: price,
        backgroundColor: [
          "yellow",
          "green",
          "blue",
          "violet",
          "white",
          "grey",
        ],
        borderColor: [
          "yellow",
          "green",
          "blue",
          "violet",
          "white",
          "grey",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="trend">
      <h1>Crypto Trends</h1>
      <Line data={pieData} style={{color:"white"}}/>
    </div>
  );
};
export default Trend;
