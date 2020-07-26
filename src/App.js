import React, { useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
// import { v4 as uuidv4 } from "uuid";
import { something } from "./testData.js";

const Navbar = () => (
	<header className="App-header">
		<div>Time-keeping</div>
	</header>
);

function App() {
	const [entries, setEntries] = useState(something);
	const [modalOpen, setModalOpen] = useState(false);

	const addEntry = () => {
		setModalOpen(true);
		console.log("Added a new entry")
		// setNewEntry({ ...newEntry, id: uuidv4() });
		// setEntries([...entries, newEntry]);
	};

	const toggleEditModal = () => {
		setModalOpen(!modalOpen);
	}

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
								{entry.startTime}
							</div>
							<div>
								{entry.endTime}
							</div>
						</div>
						<div>{entry.unit} u</div>
						<div>{entry.caseId}</div>
						<div>{entry.type}</div>
						<button onClick={() => deleteEntry(entry.id)}>
							<i className="fa fa-trash"></i>
						</button>
					</div>
				);
			})}
			<button onClick={toggleEditModal}>+</button>

			{/* This is modal content created by the button */}
			{
				modalOpen && (
					<div id="myModal" class="modal">
						<div class="modal-content">
							<span class="close" onClick={toggleEditModal}>&times;</span>
							<h2>Add a new entry</h2>

						</div>
					</div>
				)
			}

		</div>
	);
}

export default App;
