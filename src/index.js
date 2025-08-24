'use strict'

/**
 * 
 * @param {number} fatherAge 
 * @param {number} sonAge 
 * @returns {number or null} - the number of years agter which father`s age will be twice that of the son
 */
function calculateYears(fatherAge, sonAge) {
	let result = null

	if(fatherAge < 0 || sonAge < 0) {
		console.log('The age cannot be negative');
	} else if (fatherAge - sonAge < 15) {
		console.log('The age difference cannot be less than 15');
	} else {
		result = fatherAge - 2 * sonAge
	}
	
	return result
}

console.log(calculateYears(-20, 5));
console.log(calculateYears(20, 6));
console.log(calculateYears(30, 5));