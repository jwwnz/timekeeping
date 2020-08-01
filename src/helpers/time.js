import dayjs from "dayjs";

// Get current time
const getCurrentDateTime = () => {
	const newDateTime = dayjs();
	console.log(newDateTime);
	return newDateTime;
};

// Set Date and time using datetime string (HH:mm)
const setDateAndTimeWithDatetimeString = (datetimeString) => {
	const datetimeArray = datetimeString.split(":");
	let returnDateAndTime = dayjs();
	returnDateAndTime.hour(datetimeArray[0]);
	returnDateAndTime.minute(datetimeArray[1]);
	console.log(returnDateAndTime);

	return dayjs(returnDateAndTime);
};

const formatDateToDatetime = (date) => date.format("HH:mm");

// Add time to existing time
// Calculates to minutes only
const addTimeAndReturnEndTime = (existingTime, periodToAdd) => {
	const hours = existingTime.hour();
	const minutes = existingTime.minute();
	const { hoursToAdd, minutesToAdd } = periodToAdd;

	// let endTime = dayjs().date(date);
	let endTime = dayjs().hour(hours + hoursToAdd);
	endTime.minute(minutes + minutesToAdd);
	console.log(endTime);

	return endTime;
};

// Calculate period between two time.

// Calculate units of specified period

// Get time for a particular day only.

export {
	getCurrentDateTime,
	addTimeAndReturnEndTime,
	setDateAndTimeWithDatetimeString,
	formatDateToDatetime,
};
