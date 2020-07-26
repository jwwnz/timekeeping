import React, { useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { v4 as uuidv4 } from "uuid";
import { something } from "./testData.js";

const Navbar = () => (
	<header className="App-header">
		<div>Time-keeping</div>
	</header>
);

function App() {
	const [entries, setEntries] = useState(something);
	const [modalOpen, setModalOpen] = useState(false);

	const toggleEditModal = () => {
		setModalOpen(!modalOpen);
	}

	const deleteEntry = (uuid) => {
		const arrayWithoutDeletedEntry = entries.filter((entry) => {
			return entry.id !== uuid;
		});
		setEntries(arrayWithoutDeletedEntry);
	};

	const Modal = () => {
		const [newEntry, setNewEntry] = useState({
			id: null,
			caseId: null,
			startTime: null,
			endTime: null,
			unit: 0,
			type: null,
		});

		const addEntry = () => {
			setNewEntry({ ...newEntry, id: uuidv4() });
			setEntries([...entries, newEntry]);
			toggleEditModal();
		};

		const updateNewStartTime = (e) => {
			setNewEntry({
				caseId: newEntry.caseId,
				startTime: e.target.value,
				endTime: newEntry.endTime,
				unit: newEntry.unit,
				type: newEntry.type,
			});
		};

		const updateNewEndTime = (e) => {
			setNewEntry({
				caseId: newEntry.caseId,
				startTime: newEntry.startTime,
				endTime: e.target.value,
				unit: newEntry.unit,
				type: newEntry.type,
			});
		};

		const updateNewUnit = (e) => {
			setNewEntry({
				caseId: newEntry.caseId,
				startTime: newEntry.startTime,
				endTime: newEntry.endTime,
				unit: e.target.value,
				type: newEntry.type,
			});
		};

		const updateNewCaseId = (e) => {
			setNewEntry({
				caseId: e.target.value,
				startTime: newEntry.startTime,
				endTime: newEntry.endTime,
				unit: newEntry.unit,
				type: newEntry.type,
			});
		};

		const updateNewType = (e) => {
			setNewEntry({
				caseId: newEntry.caseId,
				startTime: newEntry.startTime,
				endTime: newEntry.endTime,
				unit: newEntry.unit,
				type: e.target.value,
			});
		};


		return (<div id="myModal" class="modal">
			<div class="modal-content">
				<span class="close" onClick={toggleEditModal}>&times;</span>
				<h2>Add a new entry</h2>

				<div className="Time-entry Time-entry-add" key={"add"}>
					<div>
						<input
							className="input input-time"
							type="time"
							id="time-start"
							name="time-start"
							onChange={updateNewStartTime}
						/>
						<input
							className="input input-time"
							type="time"
							id="time-end"
							name="time-end"
							onChange={updateNewEndTime}
						/>
					</div>
					<div>
						<input
							className="input input-unit"
							type="number"
							id="unit"
							name="unit"
							onChange={updateNewUnit}
						/>
					&nbsp;unit
				</div>
					<div>
						<input
							className="input input-case-id"
							type="text"
							id="case-id"
							name="case-id"
							placeholder="case id"
							onChange={updateNewCaseId}
						/>
					</div>
					<div>
						<input
							className="input input-type"
							type="text"
							id="type"
							name="type"
							placeholder="Type"
							onChange={updateNewType}
						/>
					</div>
					<button onClick={addEntry}>
						<i className="fa fa-plus"></i>
					</button>
				</div>
			</div>
		</div>);
	}

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
					<Modal />
				)
			}

		</div>
	);
}

export default App;
