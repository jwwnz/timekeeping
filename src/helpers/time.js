import dayjs from "dayjs";

// Get current time
const getCurrentDateTime = () => {
	const newDateTime = dayjs();
	console.log(1);
	console.log(newDateTime);
	return newDateTime;
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
	console.log(endTime);

	return endTime;
};

// Calculate period between two time.

// Calculate units of specified period

// Get time for a particular day only.

export { getCurrentDateTime, addTimeAndReturnEndTime };
