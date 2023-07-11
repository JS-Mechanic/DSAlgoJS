"use strict";

const letters = ["a", "d", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];
console.log(letters.sort());
console.log(basket.sort());
console.log(basket.sort((a, b) => a - b));
console.log(basket.sort((a, b) => b - a));

// Bubble SortImplementation:
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

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
}

bubbleSort(numbers);
console.log(numbers);
