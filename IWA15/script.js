// Define the data object
/**
 * 
 * 
 * 
 * Data object
 * @type {DataObject}
 */

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5 ]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}


// Only edit below

const [ignoreFirst, first] = data.lists[0];
const [ignoreSecond, second] = data.lists[1];
const [ignoreThird, third] = data.lists[2];

// Define the result array
/**
 * Result Array.
 * @type {number[]} 
 */
	
const result = []
 
//@ts-check

/**
 * Represents a data object with lists.
 * @typedef {object} DataObject
 * @property {Array<Array<string | number[]>>} lists - the lists of data.
 */

/**
 * Extracts the biggest number from the lists
 * @returns {number} The biggest number from the lists
 */

const extractBiggest = () => {
	let firstValue = first[first.length -1]
	let  secondValue = second[second.length -1]
	let thirdValue = third[third.length -1] 
	
 	const biggest = Math.max(firstValue || 0,secondValue || 0,thirdValue || 0)
		

	if(firstValue ==biggest) {
		 return first.pop()
		
	}else if (secondValue == biggest){
		return second.pop()
	}else{
		return third.pop()

 }
}



// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)


