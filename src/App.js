import React, { useState, useEffect } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { v4 as uuidv4 } from "uuid";
import { something } from "./testData.js";
import {
	addUnitsToTime,
	calculateUnits,
	calculateUnitsFromSecondsElapsed,
	calculateDifferenceBetweenStartAndEnd,
	getCurrentDateTime,
	setDateAndTimeWithDatetimeString,
	formatDateToDatetime,
} from "./helpers/time.js";

function App() {
	const [entries, setEntries] = useState(something);
	const [modalOpen, setModalOpen] = useState(false);
	const [isModalNew, setIsModalNew] = useState(null);
	const [settingModalOpen, setSettingModalOpen] = useState(false);
	const [name, setName] = useState("");
	const [hourlyRate, setHourlyRate] = useState(200);

	const toggleAddModal = () => {
		setIsModalNew(null);
		setModalOpen(!modalOpen);
	};

	const toggleEditModal = (entry) => {
		console.log(entry);
		setIsModalNew(entry);
		setModalOpen(!modalOpen);
	};

	const toggleSettingsModal = () => {
		setSettingModalOpen(!settingModalOpen);
	};

	const deleteEntry = (uuid) => {
		const arrayWithoutDeletedEntry = entries.filter((entry) => {
			return entry.id !== uuid;
		});
		setEntries(arrayWithoutDeletedEntry);
	};

	const Navbar = () => (
		<header className="App-header">
			<div>
				<div>Loci {name && name}</div>
				<button
					onClick={toggleSettingsModal}
					className="button-icon navbar-settings-button"
				>
					<span style={{ fontSize: "20px" }}>${hourlyRate} ph&nbsp;</span>
					<i className="fa fa-cog"></i>
				</button>
			</div>
		</header>
	);

	const SettingsModal = () => {
		const [tempName, setTempName] = useState(null);
		const [tempHourlyRate, setTempHourlyRate] = useState(200);

		const saveSettings = () => {
			setName(tempName);
			setHourlyRate(tempHourlyRate);
			toggleSettingsModal();
		};

		return (
			<div className="modal">
				<div className="setting-modal-content">
					<span className="close" onClick={toggleSettingsModal}>
						&times;
					</span>
					<h1>Settings</h1>
					<h3>Name</h3>
					<input
						type="text"
						className="input input-short center-block"
						value={tempName}
						onChange={(e) => setTempName(e.target.value)}
					></input>
					<h3>Hourly Rate</h3>
					<input
						type="number"
						className="input input-short center-block"
						value={tempHourlyRate}
						onChange={(e) => setTempHourlyRate(e.target.value)}
					></input>
					<button onClick={saveSettings} className="button-save">
						Save&nbsp;<i className="fa fa-save"></i>
					</button>
				</div>
			</div>
		);
	};

	const Modal = ({ entry }) => {
		const entryContent = entry
			? entry
			: {
					id: uuidv4(),
					caseId: null,
					startTime: getCurrentDateTime(),
					endTime: null,
					unit: 0,
					type: null,
					description: null,
			  };
		const [newEntry, setNewEntry] = useState(entryContent);
		const [timeElapsed, setTimeElapsed] = useState(0);
		const [timerIsOn, setTimerIsOn] = useState(false);
		const [validationMessage, setValidationMessage] = useState(null);
		const [isEdit] = useState(entry ? true : false);

		useEffect(() => {
			if (!timerIsOn) return;

			const timer =
				timerIsOn &&
				setInterval(() => {
					setTimeElapsed(timeElapsed + 1);
				}, 1000);

			return () => clearInterval(timer);
		}, [timerIsOn, timeElapsed]);

		const addEntry = () => {
			if (validateAllItemsEntered()) {
				if (isEdit) {
					for (let i = 0; i < entries.length; i++) {
						if (entries[i].id === newEntry.id) {
							entries[i] = newEntry;
							setEntries(entries);
							toggleAddModal();
							return;
						}
					}
				} else {
					setEntries([...entries, newEntry]);
					toggleAddModal();
				}
			} else {
				console.warn("You have not finished");
			}
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

			setTimeElapsed(
				calculateDifferenceBetweenStartAndEnd(newEntry.startTime, newEndTime) *
					60
			);
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

		const validateAllItemsEntered = () => {
			const { caseId, startTime, endTime, unit, type, description } = newEntry;

			if (caseId && startTime && endTime && unit && type && description) {
				return true;
			}
			setValidationMessage("You have not filled in all the fields");
			return false;
		};

		const startTimer = () => {
			setTimerIsOn(true);
		};

		const stopTimer = () => {
			const unit = calculateUnitsFromSecondsElapsed(timeElapsed);
			setNewEntry({
				id: newEntry.id,
				caseId: newEntry.caseId,
				startTime: newEntry.startTime,
				endTime: addUnitsToTime(newEntry.startTime, unit),
				unit,
				type: newEntry.type,
				description: newEntry.description,
			});
			setTimerIsOn(false);
		};

		return (
			<div id="myModal" className="modal">
				<div className="modal-content">
					<span className="close" onClick={toggleAddModal}>
						&times;
					</span>
					<div className="input-content">
						{timerIsOn ? (
							<button
								onClick={stopTimer}
								className="button-timer-stop"
							>{`Stop ${timeElapsed}`}</button>
						) : (
							<button onClick={startTimer} className="button-timer-start">
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
								value={
									newEntry.startTime !== undefined &&
									newEntry.startTime !== null &&
									formatDateToDatetime(newEntry.startTime)
								}
								disabled={timerIsOn}
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
								value={
									newEntry.endTime !== undefined &&
									newEntry.endTime !== null &&
									formatDateToDatetime(newEntry.endTime)
								}
								disabled={timerIsOn}
							/>
						</div>
						<div className="input-pair">
							<label htmlFor="time-elapsed">Time elapsed:</label>
							<input
								className="input input-short"
								type="text"
								id="time-elapsed"
								name="time-elapsed"
								value={`${(timeElapsed / 60).toFixed(1)} min`}
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
								disabled={timerIsOn}
							/>
						</div>
						<div className="input-pair">
							<label htmlFor="earnings">Total Earnings:</label>
							<input
								className="input input-short"
								type="number"
								id="earnings"
								name="earnings"
								value={newEntry.unit * hourlyRate}
								disabled
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
									list="category"
									name="category"
									placeholder="Category"
									onChange={updateNewType}
								/>
								<datalist id="category">
									<option value="Pleadings" />
									<option value="Meeting" />
									<option value="Court appearance" />
									<option value="Email" />
									<option value="Call" />
									<option value="Letter" />
								</datalist>
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
						{validationMessage && (
							<div className="validation-message">{validationMessage}</div>
						)}
						<button onClick={addEntry} className="button-save">
							Save&nbsp;<i className="fa fa-save"></i>
						</button>
					</div>
				</div>
			</div>
		);
	};

	const DeterminedModal = () =>
		isModalNew ? <Modal entry={isModalNew} /> : <Modal />;

	return (
		<div className="App">
			<Navbar />
			{/* change to dynamic date */}
			<h3>{getCurrentDateTime().format("dddd D MMMM YYYY")}</h3>
			{entries.map((entry) => {
				return (
					<div
						className="Time-entry"
						key={entry.id}
						onClick={() => toggleEditModal(entry)}
					>
						<div className="vertically-center">
							<div>{formatDateToDatetime(entry.startTime)}</div>
							<div>{entry.endTime && formatDateToDatetime(entry.endTime)}</div>
						</div>
						<div className="vertically-center">{entry.unit} u</div>
						<div className="vertically-center">{entry.caseId}</div>
						<div className="vertically-center">{entry.type}</div>
						<button
							onClick={() => deleteEntry(entry.id)}
							className="button-icon"
						>
							<i className="fa fa-trash"></i>
						</button>
					</div>
				);
			})}
			<button onClick={toggleAddModal} className="button-circle">
				+
			</button>

			{/* This is modal content created by the button */}
			{modalOpen && <DeterminedModal />}
			{settingModalOpen && <SettingsModal />}
		</div>
	);
}

export default App;
