var date = new Date();
var currentYear = date.getFullYear();
var currentMonthNumber = date.getMonth();
var currentMonthNumberPlus1 = currentMonthNumber + 1;
var currentMonth = getCurrentMonth();
var daysInTheMonth = getDaysInMonth();
var dayOfTheWeek = getDayOfTheWeek();
var today = date.getDate();
var daysArray = [];
var isDayBlank = getBlankDay();

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
  return Math.round(((new Date(currentYear, currentMonthNumberPlus1))-(new Date(currentYear, currentMonthNumberPlus1 - 1)))/86400000);
}

function printDays(days) {
  for (var counter = 1; counter <= days; counter++)
    daysArray.push(counter);
  return daysArray;
}

function getBlankDay() {
  return new Date(currentYear, currentMonthNumber, 1).getDay();
}

document.write(dayOfTheWeek);
document.write(today);
document.write(currentMonth);
document.write(currentYear);
document.write(daysInTheMonth);
document.write(printDays(daysInTheMonth));

document.getElementById("month-year").innerHTML = currentMonth + " " + currentYear;

// build dates part of table
var tbodyHTML = "<tr>";
for (var counter = 0; counter < 7; counter++)
  // if (isDayBlank)
  //   tbodyHTML += "<td>" + "</td>";
  // else
    tbodyHTML += "<td>" + daysArray[counter] + "</td>";
tbodyHTML += "</tr>";
document.getElementsByTagName("tbody")[0].innerHTML = tbodyHTML;

console.log(isDayBlank);