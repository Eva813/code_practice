//https://leetcode.com/problems/function-composition/editorial/?utm_campaign=PostD7&utm_medium=Post&utm_source=Post&gio_link_id=4PY7wZM9


//Implementation using a for ... of loop:
var composeFor = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    let input = x;

    for (const func of functions.reverse()) {
      input = func(input);
    }

    return input;
  };
};

//typeScript 

type F = (x: number) => number;

function composeTS(functions: F[]): F {
  return function (x: number): number {
    if (functions.length === 0) return x;
    let input = x;

    for (const func of functions.reverse()) {
      input = func(input);
    }

    return input;
  };
};


// Approach 2: Function Composition using Array.reduceRight()
// Intuition
// In the first approach, we used iteration to apply the functions from right to left.Alternatively, we can utilize the Array.reduceRight() method to achieve the same result.The reduceRight() method applies a function against an accumulator and each element in the array(from right to left) to reduce it to a single value.In this case, our accumulator will be the input value x, and the function will be the composition of the functions in the array.

// Using reduceRight() simplifies the code and provides a more functional programming style solution.The key is to understand how the Array.reduceRight() method works and how it can be applied to this problem.

//   Algorithm
// Inside the compose function, return another function that takes an input value x.
// Use the Array.reduceRight() method to iterate over the functions from right to left.
// For each function in the array, apply it to the accumulator(x initially) and update the accumulator with the result.
// After iterating through all the functions, return the final accumulator value as the output of the composed function.

type F = (x: number) => number;

function compose(functions: F[]): F {
  return (x: number) => functions.reduceRight((acc, f) => f(acc), x);
}
;
