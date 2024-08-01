const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Меняем значения переменных
			}
		}
	}
};
const arr = [6, 5, 3, 8, 5, 1, 2, 18, 7, 8, 9];
bubbleSort(arr);
console.log(arr);