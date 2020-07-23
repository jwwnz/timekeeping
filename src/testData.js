import { v4 as uuidv4 } from "uuid";

const something = [
	{
		id: uuidv4(),
		caseId: "ABC-123",
		startTime: "12:00",
		endTime: "14:00",
		unit: 1.0,
		type: "Pleadings",
	},
	{
		id: uuidv4(),
		caseId: "ABC-123",
		startTime: "14:00",
		endTime: "15:00",
		unit: 0.5,
		type: "Pleadings",
	},
];

const newAdd = (uuid) => {
	return {
		id: uuid,
		caseId: "ABC-123",
		startTime: "00:00",
		unit: 1,
		type: "Pleadings",
	};
};

export { something, newAdd };
