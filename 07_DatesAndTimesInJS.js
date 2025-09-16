/************ DATES ************************************************/
let myDate = new Date()
console.log(typeof myDate) // object
console.log(myDate); // 2025-08-01T08:49:47.233Z (will be changed according to date and time)

console.log(myDate.toString()); // Fri Aug 01 2025 14:21:36 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); /* Returns a date as a string value in ISO format. */ // 2025-08-01T08:55:55.679Z
console.log(myDate.toDateString()); /* Returns a date as a string value. */ // Fri Aug 01 2025
console.log(myDate.toTimeString()); /* Returns a time as a string value. */ // 14:40:08 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()); /* Returns a date converted to a string using Universal Coordinated Time (UTC). */ // Fri, 01 Aug 2025 09:10:08 GMT
console.log(myDate.toLocaleTimeString());

console.log(myDate.getFullYear()); /* Gets the year, using local time. */ // 2025
console.log(myDate.getMonth()); /* Gets the month, using local time. */ // 7
console.log(myDate.getDate()); /* Gets the day-of-the-month, using local time. */ // 1
console.log(myDate.getDay()); /* Gets the day of the week, using local time. */ // 5
console.log(myDate.getHours()); /* Gets the hours in a date, using local time. */ // 14
console.log(myDate.getMinutes()); /* Gets the minutes of a Date object, using local time. */ // 43
console.log(myDate.getTimezoneOffset()); /* Gets the difference in minutes between Universal Coordinated Time (UTC) and the time on the local computer. */ // -330
console.log(myDate.getUTCDate()); /* Gets the day-of-the-month, using Universal Coordinated Time (UTC). */ // 1


let myCreatedDate = new Date()
console.log(myCreatedDate.toDateString()); // Fri Aug 01 2025

let myCreatedDate2 = new Date(2025, 5, 27)
console.log(myCreatedDate2.toDateString()); // Fri Jun 27 2025

let myCreatedDate3 = new Date(2025, 5, 27, 5, 7)
console.log(myCreatedDate3.toLocaleDateString()); // 6/27/2025
console.log(myCreatedDate3.toLocaleTimeString()); // 5:07:00 AM
console.log(myCreatedDate3.toLocaleString()); // 6/27/2025, 5:07:00 AM

let myCreatedDate4 = new Date("2025-03-09") // YYYY-MM-DD format
console.log(myCreatedDate4.toDateString()); // Sun Mar 09 2025
console.log(myCreatedDate4.toLocaleString()); // 3/9/2025, 5:30:00 AM

let myCreatedDate5 = new Date("2-1-25") // MM-DD-YYYY format
console.log(myCreatedDate5.toDateString()); // Sat Feb 01 2025
console.log(myCreatedDate5.toLocaleString()); // 2/1/2025, 12:00:00 AM

/************************************************************/







/************* TIME ***********************************************/
let myTimeStamps = Date.now() /* Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC). */
console.log(myTimeStamps); // in milliseconds
console.log(myTimeStamps/1000); // in seconds in Decimal Values
console.log(Math.floor(myTimeStamps/1000)); // in seconds in floor (whole) Values


let newDate = new Date();
console.log(newDate);  // Today's exact Date
console.log(newDate.getMonth()); // Current Month in number starting from 0 index. 
/* 
The getMonth() method in JavaScript returns the month (0–11), 
where January = 0 and December = 11.
So, to get the correct (human-readable) month number, we add 1.

Example: For September (which is the 9th month),
newDate.getMonth() will return 8, so we do newDate.getMonth() + 1 = 9.
 */
console.log(`Current Month (1–12): ${newDate.getMonth() + 1}`);




/******************************   toLocaleString() = Convert a Date into a localized string representation, with customizable parts.  ******************************/

console.log(newDate.toLocaleDateString()); // Output (depends on your system locale): 9/16/2025
console.log(newDate.toLocaleDateString("en-GB")); // Output (UK format): 16/09/2025

console.log(newDate.toLocaleDateString("en-GB", {
    weekday: "long",
    month: "long",
    day: "numeric"
}));  // Tuesday 16 September


console.log(newDate.toLocaleDateString("default", {
    weekday: "long",
    month: "long",
    day: "numeric"
}));  // Tuesday, September 16



/************************************************************/