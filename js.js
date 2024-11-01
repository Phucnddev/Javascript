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
    if (index !== -1) {
        const temporaryArray = arr.splice(index, 1);
        const removed = temporaryArray[0];

        arr.unshift(removed);
    }
    return arr;
}
console.log(moveToTop(marks, 'Yellow'))

function totalMark(marks) {
    return marks.reduce((acc, curr) => {
        if (curr?.mark !== undefined) {
            return acc + curr.mark
        }
        return acc;
    }, 0)
}
console.log("totalMark", totalMark(marks))


const products2 = [{
    name: 'Iphone 16',
    colors: ['white', 'ocean', 'pink', 'purple'],
    quantity: 20,
    price: 20000000
}, {
    name: 'Iphone 16 promax',
    colors: ['white', 'ocean', 'yellow'],
    quantity: 40,
    price: 30000000
}, {
    name: 'Iphone 15',
    colors: ['purple'],
    quantity: 13,
    price: 10000000
}, {
    name: 'samsung zip 4',
    colors: ['gray', 'green'],
    quantity: 2,
    price: 25000000
}]
function findIphone(products2) {
    return products2.reduce((acc, product) => {
        if (product?.name?.startsWith('Iphone')) {
            acc.push({
                name: product.name,
                price: product.price
            });
        }
        return acc;
    }, []);
}
console.log(findIphone(products2));


// 
function convertColor(products2) {
    return products2.reduce((acc, product) => {
        if (product?.name?.startsWith('Iphone')) {
            acc.push({
                name: product.name,
                colors: product.colors.join(', ')
            });
        }
        return acc;
    }, []);
}
console.log('convertColor', convertColor(products2));


function removeDuplicates(arr) {
    return Object.values(arr.reduce((acc, curr) => {
        acc[curr] = curr;
        return acc;
    }, {}));
}

const a = [4, 1, 4, 5, 6, 7];
const uniqueArray = removeDuplicates(a);
console.log(uniqueArray); // Output: [4, 1, 5, 6, 7]


function removeDuplicates2(arr) {
    return Object.values(arr.reduce((acc, curr) => {
        if (acc[curr] = curr) {
            return acc
        }
    }, {}))
}
const aa = [4, 1, 4, 5, 6, 7];
const uniqueArray2 = removeDuplicates2(aa);
console.log(uniqueArray2);



const products3 = [{
    name: 'Iphone 16',
    colors: ['white', 'ocean', 'pink', 'purple'],
    quantity: 20,
    price: 20000000
}, {
    name: 'Iphone 16 promax',
    colors: ['white', 'ocean', 'yellow'],
    quantity: 40,
    price: 30000000
}, {
    name: 'Iphone 15',
    colors: ['purple'],
    quantity: 13,
    price: 10000000
}, {
    name: 'samsung zip 4',
    colors: ['gray', 'green'],
    quantity: 2,
    price: 14000000
}]

/**
 * Homework:
 * 1. write a convert function returning
    { totalQuantity: 75, products: [{ name: '', price: '30,000,000' }] }
   2. merge sorted numbers
   given 2 array sorted numbers: nums1 = [0, 4, 9], nums2 = [2, 2, 4, 7, 9]
   merge => return a new array = [0, 2, 2, 4, 4, 7, 9, 9]
   // O(n + m)
 */



  

function convert(products) {
    // Tính tổng số lượng sản phẩm
    const totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);

    // tim sp co price cao nhat

    const highestPriceProduct = products.reduce((acc, curr) => curr.price > acc.price ? curr : acc);

    return {
        totalQuantity,
        products: highestPriceProduct.name,
        price : highestPriceProduct.price
    };
}


const result2 = convert(products3);
console.log("result2", result2);






const nums11 = [0, 4, 9];
const nums22 = [2, 2, 4, 7, 9];

function mergeSortArray(arr1, arr2) {
    const mergedArray = [];
    let i = 0; 
    let j = 0; 

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
   
    return mergedArray;
}


const result4 = mergeSortArray(nums11, nums22);
console.log(result4);
