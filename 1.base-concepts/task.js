"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - (4 * a * c);
	let x1 = (-b + Math.sqrt(d)) / (2 * a);
	let x2 = (-b - Math.sqrt(d)) / (2 * a);

	if (d < 0) {
		arr = [];
	} else if (d == 0) {
		let x = -b / (2 * a);
		arr = [x];
	} else {
		arr = [x1, x2]
	}
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return 'Параметр "Процентная ставка" содержит неправильное значение ' + "\"" + `${String(percent)}` + "\"";
  }
  if (isNaN(contribution)) {
    return 'Параметр "Начальный взнос" содержит неправильное значение ' + "\"" + `${contribution}` + "\"";
  }
  if (isNaN(amount)) {
    return 'Параметр "Общая стоимость" содержит неправильное значение ' + "\"" + `${amount}` + "\"";
  }

  let totalAmount;
  let creditBody;
  let percentDoubleMonth;
  let payment;
  creditBody = amount - contribution;
  let currentDate = new Date();
  let resultDate = 0;
  resultDate = monthDiff(date, currentDate);
  percentDoubleMonth = percent / 100 / 12;
  payment = creditBody * (percentDoubleMonth + percentDoubleMonth / (((1 + percentDoubleMonth) ** resultDate) - 1));
  totalAmount = (payment * resultDate);
  console.log(totalAmount);
  return + totalAmount.toFixed(2);
}

function monthDiff(d1, d2) {
  let months;
  months = (d1.getFullYear() - d2.getFullYear()) * 12;
  months -= d2.getMonth();
  months += d1.getMonth();
  return months <= 0 ? 0 : months;
}
