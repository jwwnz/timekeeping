import React, { useState, useEffect } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { v4 as uuidv4 } from "uuid";
import { something } from "./testData.js";
import {
	addUnitsToTime,
	calculateUnits,
	getCurrentDateTime,
	addTimeAndReturnEndTime,
	setDateAndTimeWithDatetimeString,
	formatDateToDatetime,
} from "./helpers/time.js";

const Navbar = () => (
	<header className="App-header">
		<div>Loci</div>
	</header>
);

function App() {
	const [entries, setEntries] = useState(something);
	const [modalOpen, setModalOpen] = useState(false);
	const [timeElapsed, setTimeElapsed] = useState(0);
	const [timerIsOn, setTimerIsOn] = useState(false);

	useEffect(() => {
		if (!timerIsOn) return;

		const timer =
			timerIsOn &&
			setInterval(() => {
				setTimeElapsed(timeElapsed + 1);
				console.log(timeElapsed);
			}, 1000);

		return () => clearInterval(timer);
	}, [timerIsOn, timeElapsed]);

	const toggleEditModal = () => {
		setModalOpen(!modalOpen);
	};

	const deleteEntry = (uuid) => {
		const arrayWithoutDeletedEntry = entries.filter((entry) => {
			return entry.id !== uuid;
		});
		setEntries(arrayWithoutDeletedEntry);
	};

	const Modal = () => {
		const [newEntry, setNewEntry] = useState({
			id: uuidv4(),
			caseId: null,
			startTime: null,
			endTime: null,
			unit: 0,
			type: null,
			description: null,
		});

		const addEntry = () => {
			const newId = uuidv4();
			console.log("Hello" + newId);
			setNewEntry({ ...newEntry, id: newId });
			setEntries([...entries, newEntry]);
			toggleEditModal();
		};

		const updateNewStartTime = (e) => {
			setNewEntry({
				id: newEntry.id,
				caseId: newEntry.caseId,
				startTime: setDateAndTimeWithDatetimeString(e.target.value),
				endTime: newEntry.endTime,
				unit: newEntry.unit,
				type: newEntry.type,
				description: newEntry.description,
			});
		};

		const updateNewEndTime = (e) => {
			const newEndTime = setDateAndTimeWithDatetimeString(e.target.value);

			setNewEntry({
				id: newEntry.id,
				caseId: newEntry.caseId,
				startTime: newEntry.startTime,
				endTime: newEndTime,
				unit: calculateUnits(newEntry.startTime, newEndTime),
				type: newEntry.type,
				description: newEntry.description,
			});
		};

		const updateNewUnit = (e) => {
			const unit = e.target.value;

			setNewEntry({
				id: newEntry.id,
				caseId: newEntry.caseId,
				startTime: newEntry.startTime,
				endTime: addUnitsToTime(newEntry.startTime, unit),
				unit,
				type: newEntry.type,
				description: newEntry.description,
			});
		};

		const updateNewCaseId = (e) => {
			setNewEntry({
				id: newEntry.id,
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
				id: newEntry.id,
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
				id: newEntry.id,
				caseId: newEntry.caseId,
				startTime: newEntry.startTime,
				endTime: newEntry.endTime,
				unit: newEntry.unit,
				type: newEntry.type,
				description: e.target.value,
			});
		};

		return (
			<div id="myModal" className="modal">
				<div className="modal-content">
					<span className="close" onClick={toggleEditModal}>
						&times;
					</span>
					<div className="input-content">
						{timerIsOn ? (
							<button
								onClick={() => setTimerIsOn(false)}
								className="button-timer-stop"
							>{`Stop ${timeElapsed}`}</button>
						) : (
							<button
								onClick={() => setTimerIsOn(true)}
								className="button-timer-start"
							>
								{timeElapsed > 0 ? `Continue ${timeElapsed}` : "Start"}
							</button>
						)}

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
							<label htmlFor="time-elapsed">Time elapsed:</label>
							<input
								className="input input-short"
								type="text"
								id="time-elapsed"
								name="time-elapsed"
								value={addTimeAndReturnEndTime(getCurrentDateTime(), {
									hoursToAdd: 2,
									minutesToAdd: 10,
								}).format("HH:mm")}
								disabled
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
			</div>
		);
	};

	return (
		<div className="App">
			<Navbar />
			{/* change to dynamic date */}
			<h3>{getCurrentDateTime().format("dddd D MMMM YYYY")}</h3>
			{entries.map((entry) => {
				return (
					<div className="Time-entry" key={entry.id}>
						<div>
							<div>{formatDateToDatetime(entry.startTime)}</div>
							<div>{entry.endTime && formatDateToDatetime(entry.endTime)}</div>
						</div>
						<div>{entry.unit} u</div>
						<div>{entry.caseId}</div>
						<div>{entry.type}</div>
						<button
							onClick={() => deleteEntry(entry.id)}
							className="button-icon"
						>
							<i className="fa fa-trash"></i>
						</button>
					</div>
				);
			})}
			<button onClick={toggleEditModal} className="button-circle">
				+
			</button>

			{/* This is modal content created by the button */}
			{modalOpen && <Modal />}
		</div>
	);
}

export default App;
