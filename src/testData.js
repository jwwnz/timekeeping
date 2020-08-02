import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { calculateUnits } from "./helpers/time";

const something = [
	{
		id: uuidv4(),
		caseId: "ABC-123",
		startTime: dayjs(),
		endTime: dayjs().add(1, "hour"),
		unit: calculateUnits(dayjs(), dayjs().add(1, "hour")),
		type: "Pleadings",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus. Turpis massa sed elementum tempus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.",
	},
	{
		id: uuidv4(),
		caseId: "ABC-123",
		startTime: dayjs().add(1, "hour"),
		endTime: dayjs().add(2.5, "hour"),
		unit: calculateUnits(dayjs().add(1, "hour"), dayjs().add(2.5, "hour")),
		type: "Pleadings",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus. Turpis massa sed elementum tempus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.",
	},
];

const newAdd = (uuid) => {
	return {
		id: uuid,
		caseId: "ABC-123",
		startTime: dayjs(),
		unit: 1,
		type: "Pleadings",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus. Turpis massa sed elementum tempus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.",
	};
};

export { something, newAdd };
