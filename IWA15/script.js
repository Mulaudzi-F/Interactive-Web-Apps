
const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [ignoreFirst, first] = data.lists[0];
const [ignoreSecond, second] = data.lists[1];
const [ignoreThird, third] = data.lists[2];


// let  first = data.lists[0][1]
// let second = data.lists[1][1]
// let third = data.lists[2][1]

const result = []
 
const extractBiggest = () => {
	const firstValue = first.pop()
	const secondValue = second.pop()
	const thirdValue = third.pop()

	

	if(firstValue >= secondValue &&  firstValue >= thirdValue) {
		return firstValue
	}
	else if (secondValue >= firstValue && secondValue >= thirdValue){
		return secondValue
	}
	else{
		return thirdValue
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