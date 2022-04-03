function divisibleSumPairs(n, k, ar) {
  let count = 0;
  let arrayRest = ar;
  let otroCuadro = [];

  for (let i = 0; i < n; i++) {
    let array = ar[i];
    let cuadro = [];

    arrayRest.slice(i).forEach((e) => {
      cuadro.push(array + e);
    });

    otroCuadro.push(cuadro.slice(1));
  }

  otroCuadro.forEach((e) => {
    e.forEach((e) => {
      if (e % k === 0) {
        count++;
      }
    });
  });

  return count;
}

let n = 6;
let k = 3;
let ar = [1, 3, 2, 6, 1, 2];

// let n = 6;
// let k = 5;
// let ar = [1, 2, 3, 4, 5, 6];

divisibleSumPairs(n, k, ar);
