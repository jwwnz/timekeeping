import React, { useState } from "react";
import "./App.css";
import dayjs from "dayjs";
import "font-awesome/css/font-awesome.min.css";

const something = [
	{
		id: "abc123",
		caseId: "ABC-123",
		startTime: new Date(),
		unit: 1.0,
		type: "Pleadings",
	},
	{
		id: "bcd321",
		caseId: "ABC-123",
		startTime: new Date(),
		unit: 0.5,
		type: "Pleadings",
	},
];

const newAdd = {
	id: "zbc",
	caseId: "ABC-123",
	startTime: new Date(),
	unit: 1,
	type: "Pleadings",
};

const Navbar = () => (
	<header className="App-header">
		<div className="">Time-keeping</div>
	</header>
);

function App() {
	const [entries, setEntries] = useState(something);
	return (
		<div className="App">
			<Navbar />
			{entries.map((entry) => {
				return (
					<div className="Time-entry" key={entry.id}>
						<div>
							<div>
								{dayjs(entry.startTime).hour()}:
								{dayjs(entry.startTime).minute()}
							</div>
							<div>
								{Math.round(dayjs(entry.startTime).hour() + entry.unit)}:
								{dayjs().minute() + Math.round((entry.unit % 1) * 60)}
							</div>
						</div>
						<div>{entry.unit}u</div>
						<div>{entry.caseId}</div>
						<div>{entry.type}</div>
						<button>
							<i className="fa fa-trash"></i>
						</button>
					</div>
				);
			})}
			<button
				onClick={() => {
					setEntries([...entries, newAdd]);
				}}
			>
				+
			</button>
		</div>
	);
}

export default App;
