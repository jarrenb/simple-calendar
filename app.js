// date = equals date
// day = day of the week

var date = new Date();

function getDates() {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getFirstDay() {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

function getLastDay() {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
}

function getMonthName() {
  var monthName;
  switch (date.getMonth()) {
    case 0:
      monthName = "january";
      break;
    case 1:
      monthName = "february";
      break;
    case 2:
      monthName = "march";
      break;
    case 3:
      monthName = "april";
      break;
    case 4:
      monthName = "may";
      break;
    case 5:
      monthName = "june";
      break;
    case 6:
      monthName = "july";
      break;
    case 7:
      monthName = "august";
      break;
    case 8:
      monthName = "september";
      break;
    case 9:
      monthName = "october";
      break;
    case 10:
      monthName = "november";
      break;
    case 11:
      monthName = "december";
      break;
  }
  return monthName;
};

function makePrevDates() {
  var lastDatePrev = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  var lastMonthDates = [];
  for (var counter = getFirstDay(); counter > 0; counter--) {
    lastMonthDates.push(lastDatePrev);
    lastDatePrev--;
  }
  lastMonthDates.reverse();
  return lastMonthDates;
}

function makeDates() {
  var dates = [];
  for (var days = 1; days <= getDates(); days++)
    dates.push(days);
  return dates;
}

function makeNextDates() {
  var firstDateNext = 1;
  var nextMonthDates = [];
  for (var counter = getLastDay() + 1; counter < 7; counter++) {
    nextMonthDates.push(firstDateNext);
    firstDateNext++;
  }
  return nextMonthDates;
}

function makeTable() {
  var tableArray = makePrevDates().concat(makeDates(), makeNextDates());
  return tableArray;
};

function buildTable() {
  var counter = 0;
  var tbodyHTML = "";
  for (var numberOfWeeks = 0; numberOfWeeks < 5; numberOfWeeks++) {
    tbodyHTML += "<tr>";
    for (var numberOfDays = 0; numberOfDays < 7; numberOfDays++) {
      tbodyHTML += "<td>" + makeTable()[counter] + "</td>";
      counter++;
    }
    tbodyHTML += "</tr>";
  }
  document.getElementsByTagName("tbody")[0].innerHTML = tbodyHTML;
}

document.getElementById("month-year").innerHTML = getMonthName() + " " + date.getFullYear();

buildTable();