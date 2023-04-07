const fibs = n => {
	let result = [0, 1]
	if (n < 3) { return result }
	for (let i = 3; i <= n; i++) {
		result = [...result, (result[result.length - 1] + result[result.length - 2])]
	}
	return result
}

const fibsRec = (n, arr = [0, 1]) => n === 2 ? arr : fibsRec(n - 1, [...arr, (arr[arr.length-1] + arr[arr.length - 2])])
