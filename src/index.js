'use strict'

// father + x = 2 * (son + x)
// father - 2 * son = 2 * x - x
// father - 2 * son = x

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

console.log(calculateYears);