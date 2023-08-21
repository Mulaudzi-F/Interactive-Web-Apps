// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const {lists:[[, first],,]} = data
const {lists:[,[, second],]} = data
const {lists:[,,[, third]]} = data



const result = []

const extractBiggest = () => {
    let temp = Math.max(first[first.length -1] || 0, second[second.length -1] || 0, third[third.length -1] || 0)

    if(temp == first[first.length -1]){
        return first.pop()
    }else if(temp == second[second.length -1]){
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
 