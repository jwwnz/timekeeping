import React, { useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { v4 as uuidv4 } from "uuid";
import { something } from "./testData.js";

const Navbar = () => (
	<header className="App-header">
		<div>Loci</div>
	</header>
);

function App() {
	const [entries, setEntries] = useState(something);
	const [modalOpen, setModalOpen] = useState(true);

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
			description: null,
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
				description: newEntry.description,
			});
		};

		const updateNewEndTime = (e) => {
			setNewEntry({
				caseId: newEntry.caseId,
				startTime: newEntry.startTime,
				endTime: e.target.value,
				unit: newEntry.unit,
				type: newEntry.type,
				description: newEntry.description,
			});
		};

		const updateNewUnit = (e) => {
			setNewEntry({
				caseId: newEntry.caseId,
				startTime: newEntry.startTime,
				endTime: newEntry.endTime,
				unit: e.target.value,
				type: newEntry.type,
				description: newEntry.description,
			});
		};

		const updateNewCaseId = (e) => {
			setNewEntry({
				caseId: e.target.value,
				startTime: newEntry.startTime,
				endTime: newEntry.endTime,
				unit: newEntry.unit,
				type: newEntry.type,
				description: newEntry.description,
			});
		};

		const updateNewType = (e) => {
			setNewEntry({
				caseId: newEntry.caseId,
				startTime: newEntry.startTime,
				endTime: newEntry.endTime,
				unit: newEntry.unit,
				type: e.target.value,
				description: newEntry.description,
			});
		};

		const updateNewDescription = (e) => {
			setNewEntry({
				caseId: newEntry.caseId,
				startTime: newEntry.startTime,
				endTime: newEntry.endTime,
				unit: newEntry.unit,
				type: newEntry.type,
				description: e.target.value,
			});
		};


		return (<div id="myModal" className="modal">
			<div className="modal-content">
				<span className="close" onClick={toggleEditModal}>&times;</span>
				<div className="input-content">
					<button className="button-timer-start">Start</button>

					<div className="input-pair">
						<label htmlFor="time-start">Start time:</label>
						<input
							className="input input-short"
							type="time"
							id="time-start"
							name="time-start"
							onChange={updateNewStartTime}
						/>
					</div>
					<div className="input-pair">
						<label htmlFor="time-end">End time:</label>
						<input
							className="input input-short"
							type="time"
							id="time-end"
							name="time-end"
							onChange={updateNewEndTime}
						/>
					</div>
					<div className="input-pair">
						<label htmlFor="unit">Units:</label>
						<input
							className="input input-short"
							type="number"
							id="unit"
							name="unit"
							value={newEntry.unit}
							onChange={updateNewUnit}
						/>
					</div>
					<div className="input-pair">
						<label htmlFor="unit">Total Earnings:</label>
						<input
							className="input input-short"
							type="number"
							id="unit"
							name="unit"
							value={newEntry.unit}
							onChange={updateNewUnit}
						/>
					</div>


					<div className="input-case-group">
						<div className="input-pair">
							<label htmlFor="case-id">Case:</label>
							<input
								className="input input-short input-case-group-color"
								type="text"
								id="case-id"
								name="case-id"
								placeholder="case id"
								onChange={updateNewCaseId}
							/>
						</div>
						<div className="input-pair">
							<label htmlFor="action-type">Category:</label>
							<input
								className="input input-short input-case-group-color"
								type="text"
								id="type"
								name="action-type"
								placeholder="Type"
								onChange={updateNewType}
							/>
						</div>
						<div className="input-description-pair">
							<label htmlFor="case-description">Description:</label>
							<textarea
								className="input"
								name="case-description"
								cols="40"
								rows="5"
								onChange={updateNewDescription}
							/>
						</div>
					</div>
					<button onClick={addEntry} className="button-save">
						Save
					</button>
				</div>
			</div>
		</div >);
	}

	return (
		<div className="App">
			<Navbar />
			{/* change to dynamic date */}
			<h3>Monday, 27th July 2020</h3>
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
						<button onClick={() => deleteEntry(entry.id)} className="button-icon">
							<i className="fa fa-trash"></i>
						</button>
					</div>
				);
			})}
			<button onClick={toggleEditModal} className="button-circle">+</button>

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
