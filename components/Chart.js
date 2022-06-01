import React from "react";
import { useAuth } from "../hooks";
import { Line } from "react-chartjs-2";
import { useColorModeValue } from "@chakra-ui/react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { useEffect } from "react";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export default function Chart() {
	const lineColor = useColorModeValue("#000", "#fff");
	const gridColor = useColorModeValue(
		"rgba(0,0,0,0.5)",
		"rgba(255,255,255,0.5)"
	);
	const gridColorY = useColorModeValue(
		"rgba(0,0,0,0.1)",
		"rgba(255,255,255,0.1)"
	);

	const data = {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "My Balance",
				fill: false,
				lineTension: 0.5,
				backgroundColor: "#db86b2",
				borderColor: "#B57295",
				borderCapStyle: "butt",
				borderDashOffset: 0.0,
				borderJoinStyle: "#B57295",
				pointBorderColor: "#B57295",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "#B57295",
				pointHoverBorderColor: "#B57295",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				color: "#fff",
				data: [
					1000, 1400, 3000, 2400, 3400, 4000, 4300, 3900, 4500, 3000,
					4500, 5000,
				],
			},
		],
	};

	const options = {
		maintainAspectRatio: true,
		scales: {
			x: {
				display: true,
				ticks: { color: lineColor },
				grid: { color: gridColorY },
				color: "#fff",
				borderColor: "#fff",
			},
			y: {
				display: true,
				grid: { color: gridColor },
				ticks: { color: lineColor },
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};
	return <Line data={data} options={options} />;
}
