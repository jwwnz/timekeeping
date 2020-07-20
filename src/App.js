import React, { useState } from "react";
import "./App.css";
import dayjs from "dayjs";
import "font-awesome/css/font-awesome.min.css";
import { v4 as uuidv4 } from "uuid";

import { something, newAdd } from "./testData.js";

const Navbar = () => (
	<header className="App-header">
		<div className="">Time-keeping</div>
	</header>
);

function App() {
	const [entries, setEntries] = useState(something);

	const deleteEntry = (uuid) => {
		const arrayWithoutDeletedEntry = entries.filter((entry) => {
			return entry.id !== uuid;
		});
		setEntries(arrayWithoutDeletedEntry);
	};

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
						<button onClick={() => deleteEntry(entry.id)}>
							<i className="fa fa-trash"></i>
						</button>
					</div>
				);
			})}
			<button
				onClick={() => {
					setEntries([...entries, newAdd(uuidv4())]);
				}}
			>
				+
			</button>
		</div>
	);
}

export default App;
