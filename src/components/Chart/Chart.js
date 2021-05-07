import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart({ dataPoints }) {
	const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
	const totalMaximum = Math.max(...dataPointValues);
	return (
		<div className='chart'>
			{dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					data={dataPoint}
					maxValue={totalMaximum}
				/>
			))}
		</div>
	);
}

export default Chart;
