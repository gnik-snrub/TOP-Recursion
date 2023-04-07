const fibs = n => {
	let result = [0, 1]
	if (n < 3) { return result }
	for (let i = 3; i <= n; i++) {
		result = [...result, (result[result.length - 1] + result[result.length - 2])]
	}
	return result
}
