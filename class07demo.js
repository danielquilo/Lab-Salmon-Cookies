"use strict";

function CookieStand(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
}

CookieStand.prototype.getAvgCookieCount = function () {
  console.log(`This store name is ${this.name}`);
};

CookieStand.prototype.chris = "Chris";

const cookieStore1 = new CookieStand("seattle", 20, 65, 6.3);
const cookieStore2 = new CookieStand("Paris", 40, 100, 8.2);
const cookieStore3 = new CookieStand("Dubai", 15, 37, 4.2);

cookieStore1.getAvgCookieCount();
cookieStore2.getAvgCookieCount();
cookieStore3.getAvgCookieCount();

console.log(cookieStore1);
console.log(cookieStore2);
console.log(cookieStore3);

// console.log(cookieStore1);
// console.log(cookieStore1.name);
// console.log(cookieStore1.minCust);
// console.log(cookieStore1.maxCust);
// console.log(cookieStore1.avgCookies);

// console.log(cookieStore2);
// console.log(cookieStore2.name);
// console.log(cookieStore2.minCust);
// console.log(cookieStore2.maxCust);
// console.log(cookieStore2.avgCookies);