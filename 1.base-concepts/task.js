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

	let creditBody = amount - contribution;
	let percentDoubleMonth = percent / 100 / 12;
	let payment = creditBody * (percentDoubleMonth + percentDoubleMonth / (((1 + percentDoubleMonth) ** date) - 1));
	let totalAmount = (payment * date);
	console.log(totalAmount);
	return +totalAmount.toFixed(2);
}