const getEvens = (arr) => {
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			counter++;
		}
	}
	return counter;
};
