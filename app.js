var date = new Date();
var currentYear = date.getFullYear();
var currentMonthNumber = date.getMonth();
var currentMonthNumberPlus1 = currentMonthNumber + 1;
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
};

function getDaysInMonth() {
  return Math.round(((new Date(currentYear, currentMonthNumberPlus1))-(new Date(currentYear, currentMonthNumberPlus1 - 1)))/86400000);
};

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
};

function makeDaysArray() {
  var daysArray = [];
  for (var days = 0; days <= getDaysInMonth(); days++)
    daysArray.push(days);
  return daysArray;
};

// build dates part of table
function buildTable() {
  var counter = 1;
  var tbodyHTML = "";
  for (var numberOfWeeks = 0; numberOfWeeks < 5; numberOfWeeks++) {
    tbodyHTML += "<tr>";
    for (var numberOfDays = 0; numberOfDays < 7; numberOfDays++) {
      tbodyHTML += "<td>" + makeDaysArray()[counter] + "</td>";
      counter++;
    }
    tbodyHTML += "</tr>";
  }
  document.getElementsByTagName("tbody")[0].innerHTML = tbodyHTML;
}

document.getElementById("month-year").innerHTML = getCurrentMonth() + " " + currentYear;

buildTable();