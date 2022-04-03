function findMedian(arr) {
  let sort = arr.sort((a, b) => a - b);

  let media = Math.floor(sort.length / 2);

  console.log(sort[media]);
}

let n = [0, 1, 2, 4, 6, 5, 3, 17, 25, 17, 984, 7, 17223, 15];
let median = [10, 15, 16, 9, 1, 11, 22]; //11
let median1 = [99, 45, 26, 7, 11, 122, 22]; //26

findMedian(n);
findMedian(median);
findMedian(median1);
