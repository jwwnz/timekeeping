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
	const unitHourDifference = endTime.hour() - startTime.hour();
	const unitMinuteDifference = endTime.minute() - startTime.minute();

	const finalTotalMinutesDifference =
		unitHourDifference * 60 + unitMinuteDifference;

	const units = finalTotalMinutesDifference / 60;

	return units.toFixed(1);
};

// Add time to existing time
// Calculates to minutes only
const addTimeAndReturnEndTime = (existingTime, periodToAdd) => {
	const hours = existingTime.hour();
	const minutes = existingTime.minute();
	const { hoursToAdd, minutesToAdd } = periodToAdd;

	// let endTime = dayjs().date(date);
	let endTime = dayjs().hour(hours + hoursToAdd);
	endTime.minute(minutes + minutesToAdd);

	return endTime;
};

// Calculate period between two time.

// Calculate units of specified period

// Get time for a particular day only.

export {
	addTimeAndReturnEndTime,
	calculateUnits,
	formatDateToDatetime,
	getCurrentDateTime,
	setDateAndTimeWithDatetimeString,
};
