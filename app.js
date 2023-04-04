
"use strict";

const cookieData = document.getElementById("cookie-data");

const hours = [
"6am",
"7am",
"8am",
"9am",
"10am",
"11am",
"12pm",
"1pm",
"2pm",
"3pm",
"4pm",
"5pm",
"6pm",
"7pm",
];

function radomNum(min, max) {
return Math.floor(math.random() * (max - min + 1) + min);
}

function cookieStand(
locationName,
minCustPerHour,
maxCustPerHour,
avgCookiesPerSale
) 
{ this.locationName = locationName;
this.minCustPerHour = minCustPerHour;
this.maxCustPerHour = maxCustPerHour;
this.avgCookiesPerSale = avgCookiesPerSale;
this.customerEachHour = [];
this.cookiesEachHour = [];
this.totalDailyCookies = 0;
}

CookieStand.prototype.calcCookiesEachHour = function () {
for (let i =0; i < hours.length; i++){
this.customerEachHour.push(                 
randomNum(this.minCustPerHour, this.maxCustPerHour)
);
}
};

CookieStand.prototype.calcCustomersEachHour = function () {
this.calcCustomersEachHour();
for (let i =0; i < hours.length; i++) {
this.customerEachHour[i] * this.avgCookiesPerSale
this.cookiesEachHour.push(oneHour);
this.totalDailyCookies += oneHour;
}
};

CookieStand.prototype.render = function () {
this.calcCookiesEachHour();
const tr = document.createElement("tr");
let td = document.createElement("td");
td.textContent = this.locationName;
tr.appendChild(td);
// loop through and add the data for each hour to a new td element
for (let i = 0; i < hours.length; i++) {
td = document.createElement("td");
td.textContent = this.cookiesEachHour[i];
tr.appendChild(td);
}

const totalHeader = document.createElement("th");
totalHeader.textContent = this.totalDailyCookies;
tr.appendChild(totalHeader);
cookieData.appendChild(tr);
};

const seattle = new CookieStand("Seattle", 23, 65, 6.3);
const brazil = new CookieStand("brazil", 3, 24, 1.2);
const liverpool = new CookieStand("liverpool", 11, 38, 3.7);






































