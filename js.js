/**

* const arr = [4, 3, 1, 7, 9, 10, 2, 5]

* 1. find the first item diving 5 -> output: 10

* 2. return list of numbers % 5 -> output: [10,5]

*3. find the max number output:

*/
const arr = [4, 3, 1, 7, 9, 10, 2, 5];
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
        result = arr[i];
        break;
    }
}

// console.log(result)


let maxNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}

// console.log(maxNumber);

function findFirstNumber(arr, diviedNum) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % diviedNum) {
            res.push(arr[i])
        }
    }
    return res;
}

// Homework 
const marks = [
    {
        name: 'Tom',
        mark: 8,
    },
    {
        name: 'Jerry',
        mark: 3,
    },
    null,
    {
        name: 'Blue',
        mark: 3,
    },
    undefined,
    {
        name: 'Yellow',
        mark: 4,
    },
];
/**
 * input name: Yellow
 * find index of the item in the array
 * update this item into the top of the list, can return a new list
 */



function moveToTop(arr, nameToFind) {
    let item = null;
    const newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i].name === nameToFind) {
        item = arr[i];
      } else {
        newArr.push(arr[i]);
      }
    }
  
    if (item) {
      newArr.unshift(item);
    }
  
    return newArr;
  }
  const updatedMarks = moveToTop(marks, 'Yellow');
  console.log(updatedMarks);
