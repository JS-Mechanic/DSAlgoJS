"use strict";

////////////////////////////////////////////////////////////////////////////////////
// JavaScript Object As Hash Table:
const user = {
	age: 26,
	name: "John",
	magic: true,
	scream() {
		console.log("Ahhhhhhh....");
	}
}

console.log(user.age);  // O(1)
user.spell = "John John";   // O(1)
console.log(user);
user.scream();  // O(1)

////////////////////////////////////////////////////////////////////////////////////
// Implementing a hashtable from scratch:
class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}
	
	#hash(key) {    // Despite there is a for loop, but hash function is very fast, So O(1)
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
	
	set(key, value) {   // O(1)
		let address = this.#hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}
	
	get(key) {  // Most of the time, O(1) - In a very bad situation such as memory size of 2, O(n)
		let address = this.#hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}
	
	keys() {    // O(n)
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}
	
	values() {
		const valuesArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				valuesArray.push(this.data[i][0][1]);
			}
		}
		return valuesArray;
	}
}


const ht = new HashTable(50);

ht.set("grapes", 1000);
console.log(ht.get("grapes"));

////////////////////////////////////////////////////////////////////////////////////
