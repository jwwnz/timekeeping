import React, { useState } from "react";
import "./App.css";

const something = [
	{
		id: "abc123",
		caseId: "ABC-123",
		startTime: new Date(),
		unit: 1,
		type: "Pleadings",
	},
	{
		id: "bcd321",
		caseId: "ABC-123",
		startTime: new Date(),
		unit: 1,
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

function App() {
	const [entries, setEntries] = useState(something);

	return (
		<div className="App">
			<header className="App-header">
				<div className="">Time-keeping</div>
			</header>
			<div>Hello</div>
			{entries.map((entry) => {
				return (
					<div className="Time-entry">
						<span>{entry.startTime.getHours()}</span>
						<span>{entry.unit}</span>
						<span>{entry.type}</span>
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
