import { v4 as uuidv4 } from "uuid";

const something = [
	{
		id: uuidv4(),
		caseId: "ABC-123",
		startTime: "12:00",
		endTime: "14:00",
		unit: 1.0,
		type: "Pleadings",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus. Turpis massa sed elementum tempus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.",
	},
	{
		id: uuidv4(),
		caseId: "ABC-123",
		startTime: "14:00",
		endTime: "15:00",
		unit: 0.5,
		type: "Pleadings",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus. Turpis massa sed elementum tempus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.",
	},
];

const newAdd = (uuid) => {
	return {
		id: uuid,
		caseId: "ABC-123",
		startTime: "00:00",
		unit: 1,
		type: "Pleadings",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus. Turpis massa sed elementum tempus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.",
	};
};

export { something, newAdd };
