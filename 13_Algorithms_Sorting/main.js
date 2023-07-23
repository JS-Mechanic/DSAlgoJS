"use strict";

const letters = ["a", "d", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];
console.log(letters.sort());
console.log(basket.sort());
console.log(basket.sort((a, b) => a - b));
console.log(basket.sort((a, b) => b - a));

// Bubble Sort Implementation:
let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(nums) {
	// Time complexity: O(n^2) and space complexity: O(1)
	const length = nums.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if (nums[j] > nums[j + 1]) {
				let temp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = temp;
			}
		}
	}
	return nums;
}

const bsResult = bubbleSort(numbers);
console.log(bsResult);


numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
	const length = arr.length;
	for (let i = 0; i < length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < length; j++) {
			if (arr[j] < arr[minIndex]) minIndex = j;
		}
		if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	}
	return arr;
}

const ssResult = selectionSort(numbers);
console.log(ssResult);


numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(nums) {
	const length = nums.length;
	for (let i = 1; i < length; i++) {
		let currentValue = nums[i];
		let j = i - 1;
		while (j >= 0 && nums[j] > currentValue) {
			nums[j + 1] = nums[j];
			j--;
		}
		nums[j + 1] = currentValue;
	}
	return nums;
}

const sortedArray = insertionSort(numbers);
console.log(sortedArray);


numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(
		mergeSort(left),
		mergeSort(right)
	);
}

function merge(left, right) {
	const result = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	return [...result, ...left, ...right];
}

console.log(mergeSort(numbers));
