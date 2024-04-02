console.log('hey');
const sixty = productOfArray([1, 2, 3, 10]); // 60

function productOfArray(array) {
  if (array.length === 0) return 1;
  return array.pop() * productOfArray(array);
}

function power(number, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return number * power(number, exponent - 1);
  }
}

function factorial(number) {
  if (number === 1) return 1;
  return number * factorial(number - 1);
}

function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  }
  const number = array.pop();
  return number * productOfArray(array);
}

// 10 * 6(1, 2, 3)
//      3 * 2(1, 2)
//          2 * 1(1)
//              1 * 1 ()

console.log(productOfArray([1, 2, 3, 10]));

const poding = {};
const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};
//else if (type === 'object') {
function contains(obj, objValue) {
  const childObj = Object.values(obj);
  if (childObj.length === 0) {
    return false;
  }
  for (const child of childObj) {
    const type = typeof child;
    if (type === 'object') {
      return contains(child, objValue);
    } else if (child === objValue) {
      return true;
    }
  }
  return false;
}
function totalIntegers(list, total = 0) {
  if (list.length === 0) return 0;
  else if (typeof list === 'number') {
    return 1;
  }
  for (const value of list) {
    if (typeof value === 'string') {
      return 0;
    } else {
      total += totalIntegers(value);
    }
  }
  return total;
}
function SumSquares(array, total = 0) {
  if (array.length === 0) return 0;
  for (const value of array) {
    if (Array.isArray(value)) {
      total += SumSquares(value);
    } else if (Number.isInteger(value)) {
      let num = value * value;
      total += num;
    }
  }
  return total;
}
function replicate(multiplier, number, array = []) {
  if (multiplier === 0) {
    return array;
  } else if (multiplier < 0) return [];
  else if (multiplier > 0) {
    array.push(number);
  }
  return replicate(multiplier - 1, number, array);
}

function fibs(number, currentNum = 0, lastNum = 0, newArray = []) {
  if (number === 0) {
    return newArray;
  } else if (newArray.length > 1) {
    lastNum = newArray[newArray.length - 1];
    newArray.push(currentNum);
    currentNum += lastNum;
  } else if (currentNum === 0) {
    newArray.push(currentNum);
    currentNum = 1;
  } else {
    newArray.push(currentNum);
  }
  return fibs(number - 1, currentNum, lastNum, newArray);
}
// 0 +fibs (4-1)

// 0 +fibs (3-1)
// 0 +fibs (2-1)
// 0 +fibs (1-1)
// 0 +number
function fibonacci(n, memo = [0, 1]) {
  if (n < memo.length) {
    return memo.slice(0, n + 1);
  }
  if (n > memo.length - 1) {
    fibonacci(n - 1, memo);
    memo[n] = memo[n - 1] + memo[n - 2];
  }
  return memo.slice(0, n);
}

function mergeSort(array) {
  if (array.length > 1) {
    const obj = splitArray(array);
    const firstArray = obj.firstArray;
    const secondArray = obj.secondArray;

    return merge(mergeSort(firstArray), mergeSort(secondArray));
  } else if (array.length === 1) return array;

  return array;
}
function merge(firstArray, secondArray, array = []) {
  if (firstArray.length === 0) return array.concat(secondArray);
  if (secondArray.length === 0) return array.concat(firstArray);
  else if (firstArray[0] < secondArray[0]) {
    const num = firstArray.shift();
    array.push(num);
  } else {
    const num = secondArray.shift();
    array.push(num);
  }
  return merge(firstArray, secondArray, array);
}
function splitArray(array) {
  const firstArray = [];
  const secondArray = [];
  let half = Math.floor(array.length / 2);

  for (let i = 0; i < half; i++) {
    const element = array[i];
    firstArray[i] = element;
  }
  for (let i = half; i < array.length; i++) {
    const element = array[i];
    secondArray[i - half] = element;
  }
  return { firstArray, secondArray };
}
