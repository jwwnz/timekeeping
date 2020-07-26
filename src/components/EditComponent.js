import React, { useState } from "react";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";
// import { v4 as uuidv4 } from "uuid";


function EditComponent() {
    // const [entries, setEntries] = useState(something);
    const [newEntry, setNewEntry] = useState({
        id: null,
        caseId: null,
        startTime: null,
        endTime: null,
        unit: 0,
        type: null,
    });

    // const addEntry = () => {
    //     setNewEntry({ ...newEntry, id: uuidv4() });

    //     setEntries([...entries, newEntry]);
    // };

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

    // const deleteEntry = (uuid) => {
    //     const arrayWithoutDeletedEntry = entries.filter((entry) => {
    //         return entry.id !== uuid;
    //     });
    //     setEntries(arrayWithoutDeletedEntry);
    // };

    return (

        <div className="Time-entry Time-entry-add" key={"add"}>
            <div className="input input-time-group">
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
    );
}

export default EditComponent;
