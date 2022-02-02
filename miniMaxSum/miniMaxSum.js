function miniMaxSum(arr) {
  let num = arr.sort((a, b) => a - b);

  let min = num.slice(0, -1).reduce((a, b) => a + b);

  let max = num.slice(1).reduce((a, b) => a + b);

  console.log(min, max);
}

let array0 = [1, 3, 5, 7, 9];
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 5, 7, 95, -4, 1];
let array3 = [7, 69, 2, 221, 8974];

miniMaxSum(array0);
miniMaxSum(array1);
miniMaxSum(array2);
miniMaxSum(array3);
