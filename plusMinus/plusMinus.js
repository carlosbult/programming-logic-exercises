function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((num) => {
    if (num === 0) {
      zero++;
    } else if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    }
  });

  zero = zero / arr.length;
  positive = positive / arr.length;
  negative = negative / arr.length;

  console.log(positive.toFixed(6));
  console.log(negative.toFixed(6));
  console.log(zero.toFixed(6));
}

const arr1 = [-4, 3, -9, 0, 4, 1];

const arr2 = [1, 2, 3, -1, -2, -3, 0, 0];

plusMinus(arr1);
plusMinus(arr2);
