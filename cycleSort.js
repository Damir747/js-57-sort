const cycleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let value = arr[i];
		let position = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < value) {
				position++;
			}
		}
		if (position === i) {
			continue;
		}
		while (value === arr[position]) {
			position++;
		}

		[value, arr[position]] = [arr[position], value];

		while (position !== i) {
			position = i;
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[j] < value) {
					position++;
				}
			}
			while (value === arr[position]) {
				position++;
			}

			[value, arr[position]] = [arr[position], value];
		}
	}
	return arr;
};

const arr = [6, 5, 3, 8, 5, 1, 2, 18, 7, 8, 9];
console.log(arr);
cycleSort(arr);
console.log(arr);