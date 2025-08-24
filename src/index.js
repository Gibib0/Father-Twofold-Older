'use strict'

// father + x = 2 * (son + x)
// father - 2 * son = 2 * x - x
// father - 2 * son = x

function calculateAge(fatherAge, sonAge) {
	if(fatherAge < 0 || sonAge < 0) {
		console.log('The age cannot be negative');
		return null
	}

	if(fatherAge - sonAge >= 15) {
		let result = fatherAge - 2 * sonAge

		return result

	} else {
		console.log('The age difference cannot be less than 15');
		return null
	}
	
}