import dayjs from "dayjs";

// Get current time
const getCurrentDateTime = () => {
	const newDateTime = dayjs();
	return newDateTime;
};

// Set Date and time using datetime string (HH:mm)
const setDateAndTimeWithDatetimeString = (datetimeString) => {
	const datetimeArray = datetimeString.split(":");
	// let returnDateAndTime = dayjs();
	console.log(datetimeArray[0]);
	let returnDateAndTime = dayjs().hour(datetimeArray[0]);
	console.log(returnDateAndTime);
	returnDateAndTime.minute(datetimeArray[1]);
	console.log("Date time is" + datetimeString);
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
