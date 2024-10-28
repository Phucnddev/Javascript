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





// function moveToTop(arr, nameToFind) {
//     let item = null;
//     const newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] && arr[i].name === nameToFind) {
//         item = arr[i];
//       } else {
//         newArr.push(arr[i]);
//       }
//     }

//     if (item) {
//       newArr.unshift(item);
//     }

//     return newArr;
//   }
//   const updatedMarks = moveToTop(marks, 'Yellow');
//   console.log(updatedMarks);


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
 * 1. moveToTop2, you have to modify the current array
 * 2. sort the marks array following decrement 
 */

// tạo ra mãng mới 
function moveToTop2(arr, name) {
    // debugger;
    let matchedItem = null;
    const newArr = arr.filter((item) => {
        if (item?.name === name) {
            matchedItem = item
        }
        return item && item.name !== name
    })
    return matchedItem ? [matchedItem, ...newArr] : newArr;

}
console.log('move 2', moveToTop2(marks, 'Yellow'))

// thay đổi mảng gốc 

function moveToTop(arr, name) {
    const index = arr.findIndex(item => item?.name === name);
    if(index !== -1) {
        const temporaryArray = arr.splice(index, 1);
        const removed = temporaryArray[0];

        arr.unshift(removed);
    }
    return arr;
}
console.log(moveToTop(marks, 'Yellow'))

