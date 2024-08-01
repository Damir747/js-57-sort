const selectedSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		let indexMin = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[indexMin] > arr[j]) {
				indexMin = j;
			}
		}
		if (i !== indexMin) {
			[arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
		}
	}
};

const arr = [6, 5, 3, 8, 5, 1, 2, 18, 7, 8, 9];
selectedSort(arr);
console.log(arr);