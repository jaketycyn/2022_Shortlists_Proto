//! function find_averages_of_subarrays(K, arr) {
//   const result = [];
//   for (let i = 0; i < arr.length - K + 1; i++) {
//     // find sum of next "k" elements
//     let sum = 0.0;
//     for (let j = i; j < i + K; j++) {
//       sum += arr[j];
//     }
//     result.push(sum / K); //calculate average
//   }
//   return result;
// }

// 0, 0 < 9-5 +1; i++

// sum = 0.0;
// 0, 0< 0 + 5

// 1, 3, 2, 6, -1
// /5

// const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
// console.log(`Averages of subarrays of size K: ${result}`);

//! Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], (K = 5);

// function find_avg_subarrays(K, arr) {
//   const result = [];
//   for (let i = 0; i < arr.length - K + 1; i++) {
//     let sum = 0.0;
//     for (let j = i; j < i + K; j++) {
//       sum += arr[j];
//     }
//     result.push(sum / K);
//   }
// }

// const result = find_avg_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
// console.log(`Averages of subarrays of size K: ${result}`);

"The above are brute force algorithms that calculate the sum of every 5 element subarray of the given array and divide the sum by '5' to find the average. These Since for every element of the input array, we are calculating the sum of its next `k` ElementInternals, the time complexity of the above algorithm will be O(N * K ). Where N is the Number of elements in the input array. The inefficiency is that for any two consecutive subarray s of size 5 (our value of K provided) will contain an overlapping part of 4 elements. which will be evaluated twice. the efficient way to solve this problem would be to visualize each subarray as a sliding window of '5' elements. This means that we wil slide the window by one element when we move on to the next subarray. To reuse the sum from the previous subarray, we will subtract the element going out of the window and add the element now being included in the sliding window. This will save us from going through the whole subarray to find the `sum` and, as a result, the algorithm complexity will be reduced to O(N) from O(N*K) "`SLIDING WINDOW APPROACH`;

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const K = 5;

function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0.0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we dont need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculating the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead 1
    }
  }
  return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`The average of subarrays of size ${K} ${result}`);

const arr = [2, 1, 5, 1, 3, 2];
const K = 3;

function max_sum_of_subarrays(K, arr) {
  let max = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= K - 1) {
      if (max <= windowSum) {
        result.push(windowSum);
      }
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return max;
}

const max = max_sum_of_subarrays(3, [2, 1, 5, 1, 3, 2]);
console.log(` Max sum of subarrays is equal to ${max}`);

`Longest Substring with K Distinct Characters (medium)`;

("find the longest substring in it with no more than `K` distinct characters");

const string = "araaci";
const k = 2;

function longSubStrKDinstinct(str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;

    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

const Fruit = ["A", "B", "C", "A", "C"];
const k = 2;

function fruitPicker(fruit, k) {
  let windowStart = 0;
  let maxLength = 0;
  let fruitFreq = {};
  for (let windowEnd = 0; windowEnd < fruit.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightChar in fruitFreq)) {
      fruitFreq[rightChar] = 0;
    }
    fruitFreq[rightChar] += 1;

    while (Object.keys(fruitFreq).length > k) {
      const leftChar = fruit[windowStart];
      fruitFreq[leftChar] -= 1;
      if (fruitFreq[leftChar] === 0) {
        delete fruitFreq[leftChar];
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
}

const fruits = ["A", "B", "C", "A", "C"];
const kval = 2;

function fruitsIntoBasket(fruits, kval) {
  let windowStart = 0;
  let maxLength = 0;
  let fruitFreq = {};
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitFreq)) {
      fruitFreq[rightFruit] = 0;
    }
    fruitFreq[rightFruit] += 1;
    while (Object.keys(fruitFreq).length > kval) {
      const leftFruit = fruits[windowStart];
      fruitFreq[leftFruit] -= 1;
      if (fruitFreq[leftFruit] === 0) {
        delete fruitFreq[leftFruit];
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
}
