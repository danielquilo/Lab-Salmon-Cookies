const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
const tableElement = document.getElementById("sales-table");

const state = {
allCooliesStands:[],
};

function CookieStand(locationName, minCustPerHour, maxCustPerHour, avgCookiePerSale) {
this.locationName = locationName;
this.minCustPerHour = minCustPerHour;
this.maxCustPerHour = maxCustPerHour;
this.avgCookiePerSale = avgCookiePerSale;
this.customersEachHour = [];
this.cookiesEachHour - [];
this.totalDailySales = 0;
}

CookieStand.prototype.calcCustomerEachHour = function () {
for (let i = 0; i < hours.length; i++) {
this.customersEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
}
};

CookieStand.prototype.calcCookiesEachHour = function () {
for (let i = 0; i < hours.length; i++) {
const oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookiePerSale);
this.cookiesEachHour.push(oneHour);
this.totalDailySales = oneHour; 
}
};

CookieStand.prototype.render = function () {
this.calcCustomerEachHour();
this.calcCookiesEachHour();
const tableRow = document.createElement("tr");
let tableDataElement = document.createElement("tr");
tableDataElement.textContent = this.cookiesEachHour[i];
tableRow.aprrendChild(tableDataElement);
for (let i = 0; i < hours.length; i++) {
tableDataElement = document.createElement("td");
tableDataElement.textContent = this.cookiesEachHour[i];
tableRow.appendChild(tableDataElement);
}
const tableHeader = document.createElement("th");
tableHeader.textContent = this.totalDailySales;
tableRow.appendChild(tableHeader);
tableElement.appendChild(tableRow);
};


let seattle= new CookieStand("Seattle", 23, 65, 6.3);
let tokyo = new CookieStand("Tokyo", 3, 24, 1.2);
let dubai = new CookieStand("Dubai", 11, 38, 3.7);
let paris = new CookieStand("Paris", 20, 38, 2.3);
let lima = new CookieStand("Lima", 2, 16, 4.6);

state.allCookieStands.push(seattle, tokyo, dubai, paris, lima);

function random(min, max) {
return Math.floor(Math.random() * (max - min + 1 ) + min);
}

function makeHeaderRow() {
const tableRow = document.createElement("tr");
let tableHeader = document.createElement("th");
tableHeader.textContent = "Locations";
tableRow.appendChild(tableHeader);
for (let i = 0; i < hours.length; i++) {
tableHeader = document.createElement("th");
tableHeader.textContent = hours[i];
tableRow.appendChild(tableHeader);
}
tableHeader = document.createElement("th");
tableHeader.textContent = "Location Totals";
tableRow.appendChild(tableHeader);
tableElement.appendChild(tableRow);
}

function makeFooterRow() {
          const tableRow = document.createElement("tr");
          let tableHeader = document.createElement("th");
          tableHeader.textContent = "Hourly Totals for All Locations";
          tableRow.appendChild(tableHeader);
          let totalOfTotals = 0;
          for (let i = 0; i < hours.length; i++) {
            let hourlyTotal = 0;
            for (let j = 0; j < state.allCookieStands.length; j++) {
              hourlyTotal += state.allCookieStands[j].cookiesEachHour[i];
              totalOfTotals += state.allCookieStands[j].cookiesEachHour[i];
            }
            tableHeader = document.createElement("th");
            tableHeader.textContent = hourlyTotal;
            tableRow.appendChild(tableHeader);
          }
          tableHeader = document.createElement("th");
          tableHeader.textContent = totalOfTotals;
          tableRow.appendChild(tableHeader);
          tableElement.appendChild(tableRow);
        }

        function renderTable() {
          makeHeaderRow();
          for (let i = 0; i < state.allCookiesStands.length; i++) {
                    state.allCookiesStands[i].render();
          }
          makeFooterRow();
        }
        renderTable();