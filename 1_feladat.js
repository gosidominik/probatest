const kerTer = (a, b) => {
	let ker = 2 * (a + b);
	let ter = a * b;
	return {
		kerulet: ker,
		terulet: ter,
		}
};


console.log(kerTer(2,2));