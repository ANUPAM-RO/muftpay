import axios from "axios";

export const fetchApiData = async (url) => {
  let token = sessionStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.get(url, headers);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createApiData = async (url, data) => {
  let token = sessionStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.post(url, data, headers);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const updateApiData = async (url, data) => {
  let token = sessionStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.put(url, data, headers);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteApiData = async (url) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const year = date.getFullYear();

  // Create an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[date.getMonth()]; // Month names are zero-indexed

  // Function to add suffix to day
  const addSuffix = (day) => {
    if (day === 1 || day === 21 || day === 31) {
      return day + "st";
    } else if (day === 2 || day === 22) {
      return day + "nd";
    } else if (day === 3 || day === 23) {
      return day + "rd";
    } else {
      return day + "th";
    }
  };

  return `${addSuffix(day)} ${month} ${year}`;
}

export function currentDate() {
  const date = new Date();

  // Get day of the week
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = daysOfWeek[date.getDay()];

  // Get day
  const day = date.getDate();

  // Get month
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];

  // Get year
  const year = date.getFullYear();

  // Get hours and minutes
  let hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2); // Add leading zero if minutes < 10

  // Determine AM or PM
  const amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format

  return `${dayOfWeek}, ${day} ${month}, ${year}, ${hours}.${minutes} ${amOrPm}`;
}

export function formatTime(dateString) {
  const date = new Date(dateString);

  let hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);

  let amOrPm = "AM";
  if (hours >= 12) {
    amOrPm = "PM";
    hours = hours % 12 || 12;
  }

  return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}

export function getDateFromISOString(dateString) {
  const date = new Date(dateString);

  // Get year, month, and day
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based
  const day = ("0" + date.getDate()).slice(-2);

  return `${day}-${month}-${year}`;
}

export function getCurrentDateTime() {
  // Create a new Date object representing the current date and time
  const now = new Date();

  // Format the date
  const options = { 
      year: 'numeric', 
      month: 'short', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
  };
  const dateFormatter = new Intl.DateTimeFormat('en-US', options);
  const formattedDate = dateFormatter.format(now);

  // Return the formatted date
  return formattedDate;
}

export function getCurrentDate() {
  // Get current date
  var currentDate = new Date();

  // Get day, month, and year
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Month is zero-indexed, so we add 1
  var year = currentDate.getFullYear();

  // Format day and month to have leading zeros if necessary
  day = (day < 10 ? '0' : '') + day;
  month = (month < 10 ? '0' : '') + month;

  // Construct the date string in the desired format
  var formattedDate = day + '-' + month + '-' + year;

  return formattedDate;
}

