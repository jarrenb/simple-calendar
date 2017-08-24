var date = new Date();
var currentYear = date.getFullYear();
var currentMonthNumber = date.getMonth() + 1;
var currentMonth = getCurrentMonth();
var daysInTheMonth = getDaysInMonth();
var dayOfTheWeek = getDayOfTheWeek();
var today = date.getDate();

function getCurrentMonth() {
  var month;
  switch (date.getMonth()) {
    case 0:
      month = "january";
      break;
    case 1:
      month = "february";
      break;
    case 2:
      month = "march";
      break;
    case 3:
      month = "april";
      break;
    case 4:
      month = "may";
      break;
    case 5:
      month = "june";
      break;
    case 6:
      month = "july";
      break;
    case 7:
      month = "august";
      break;
    case 8:
      month = "september";
      break;
    case 9:
      month = "october";
      break;
    case 10:
      month = "november";
      break;
    case 11:
      month = "december";
      break;
  }
  return month;
}

function getDayOfTheWeek() {
  var day;
  switch (date.getDay()) {
    case 0:
      day = "sunday";
      break;
    case 1:
      day = "monday";
      break;
    case 2:
      day = "tuesday";
      break;
    case 3:
      day = "wednesday";
      break;
    case 4:
      day = "thursday";
      break;
    case 5:
      day = "friday";
      break;
    case 6:
      day = "saturday";
      break;
  }
  return day;
}

function getDaysInMonth() {
  return Math.round(((new Date(currentYear, currentMonthNumber))-(new Date(currentYear, currentMonthNumber - 1)))/86400000);
}

function printDays(days) {
  var daysArray = [];
  for (var counter = 1; counter <= days; counter++)
    daysArray.push(counter);
  return daysArray;
}

document.write(dayOfTheWeek);
document.write(today);
document.write(currentMonth);
document.write(currentYear);
document.write(daysInTheMonth);
document.write(printDays(daysInTheMonth));

// i think i've got all the data i need. now i just need to turn it into the table that i've prototyped