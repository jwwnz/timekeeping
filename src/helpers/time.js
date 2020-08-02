import dayjs from "dayjs";

// Get current time
const getCurrentDateTime = () => {
	const newDateTime = dayjs();
	return newDateTime;
};

// Set Date and time using datetime string (HH:mm)
const setDateAndTimeWithDatetimeString = (datetimeString) => {
	const datetimeArray = datetimeString.split(":");
	let returnDateAndTime = dayjs()
		.hour(datetimeArray[0])
		.minute(datetimeArray[1])
		.second(0);

	return dayjs(returnDateAndTime);
};

const formatDateToDatetime = (date) => date.format("HH:mm");

// This only calculates hours and minutes
const calculateUnits = (startTime, endTime) => {
	console.log("endtime");
	console.log(endTime);
	if (!startTime || !endTime) return 0;

	const minutes = endTime.diff(startTime, "minute");
	const units = minutes / 60;

	return units.toFixed(1);
};

const addUnitsToTime = (startTime, units) => {
	return startTime.add(units, "hour");
};

// const calculateEndTimeFromSecondsElapsed = (startTime, seconds) => {
// 	return startTime.add(seconds, "second");
// };

function roundUp(num, precision) {
	precision = Math.pow(10, precision);
	return Math.ceil(num * precision) / precision;
}

const calculateUnitsFromSecondsElapsed = (seconds) => {
	const unitsNotRounded = seconds / 60 / 60;

	const units = roundUp(unitsNotRounded, 1);
	return units;
};

// Calculate period between two time.

// Calculate units of specified period

// Get time for a particular day only.

export {
	addUnitsToTime,
	calculateUnits,
	calculateUnitsFromSecondsElapsed,
	// calculateEndTimeFromSecondsElapsed,
	formatDateToDatetime,
	getCurrentDateTime,
	setDateAndTimeWithDatetimeString,
};
