/** @format */

// hoisting
// var c = a2 + 20; // 30
// console.log('c ', c);
// console.log('a ', a2);
window.test = 10;
console.log(window);

// var: ES5
let a = 10; // number
var b = 'Hello'; // string

// ES6
let a2 = 10;
const arr = []; // address
arr.push(7);

// for (let i = 0; i < 5; i++) {
//   // i = 0 i=1  i=2 i=3
//   setTimeout(() => {
//     console.log(i); // 0 1 2 3
//   }, 1000);
// }

// space complexity
// time complexity
function get() {
  var x = '';
}
get();

// break continue return

// loop: 1-> 100
function check() {
  for (let i = 0; i < 100; i++) {
    console.log('hello ', i);
    if (i > 90) {
      return i;
    }
    if (i % 10 === 0) {
      // 10 skip
      continue;
    }
    if (i % 3 === 0) {
      break; // break the loop
    }
  }

  console.log('asdh');
}

let i = 20;

// a-> b -> c

while (i < 20) {
  //
  console.log('hello ', i);
  i++;
}

do {
  console.log('hello do', i);
  i++;
} while (i < 20);

/**
 * const arr = [4, 3, 1, 7, 9, 10, 2, 5]
 * 1. find the first item diving 5 -> output: 10
 * 2. return list of numbers % 5 -> output: [10, 5]
 * 3. find the max number -> output: 10
 */

const arr2 = [4, 3, 1, 7, 9, 10, 2, 5];

function findFirstNum(arr, dividedNum) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % dividedNum === 0) {
      return arr[i];
    }
  }

  return -1;
}

function findListNum(arr, dividedNum) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % dividedNum === 0) {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log("So dau tien chia het cho 5 trong mang la: " +findFirstNum(arr2, 5));

function findMax(arr) {
  // []
  let max = arr[0] || -1; // underfined
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findListNum(arr2, 5));
console.log(findMax(arr2));

const hao = {
  name: 'Hao',
  age: 24,
  employed: true,
}; //

const product = {
  name: 'Iphone 16',
  produceDate: '2024-09-12',
};

console.log(product.name);
console.log(product);

const products = [
  {
    name: 'Iphone 16',
    quantity: 10,
  },
  {
    name: 'Galaxy Zip 24',
    quantity: 4,
  },
  {
    name: 'Oppo',
    quantity: 15,
  },
];

// Calculate the sum of quantity of products
// return number: 29
function sumQuantity(products) {}





let mang = [2, 34, 4344, 5534, 5555, 555, 5 ,5, 99, 100];
function timSoLonNhat(arr) {
  let max = [] || -1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max ) {
      max = arr[i]
    }
    
  }
  return max;
}
console.log("So lon nhat trong mang la :" + timSoLonNhat(mang));

function timSoDauTienChiaHetCho(arr, number) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 5 === 0) {
      // newArr.push(arr[i])  // thêm nhiều phần tử nếu thỏa mãn
      return arr[i]           // chỉ trả về 1 phần tử
    }
  }
  return -1;
}

console.log("So chia het cho 5 trong mang la: "+ timSoDauTienChiaHetCho(mang, 5));

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
 * 
 * 
 * 
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
function moveToTop11(arr, nameToFind) {
  let item = null;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    if (currentItem && currentItem.name === nameToFind) {
      item = currentItem;
    } else if (currentItem !== null && currentItem !== undefined) {
      newArr.push(currentItem);
    }
  }

  if (item) {
    newArr.unshift(item);
  }

  return newArr;
}
console.log("ádasds" + moveToTop11(marks, 'Yellow'))
// function moveToTop2(arr, name) {
//   const newArr = arr.filter((item)=> item?.name !==)
// }

function findStudentsWithMark3(marks) {
  const studentsWithMark3 = [];

  for (let i = 0; i < marks.length; i++) {
    const student = marks[i];
    if (student && student.mark === 3) {
      studentsWithMark3.push(student);
    }
  }

  return studentsWithMark3;
}
const result = findStudentsWithMark3(marks);
console.log(result);

function findHighestScorer(marks) {
  const validStudents = marks.filter(student => student && typeof student.mark === 'number');
  console.log("validStudents" , validStudents)
  if (validStudents.length === 0) {
    return "Không có học sinh hợp lệ";
  }

  const highestScorer = validStudents.reduce((prev, current) => 
    prev.mark > current.mark ? prev : current
  );
  console.log("highestScorer" + highestScorer)

  const difference = 10 - highestScorer.mark;
  highestScorer.mark += 2;

  return {
    highestScorer,
    difference
  };
}

const result2 = findHighestScorer(marks);
console.log(result2);