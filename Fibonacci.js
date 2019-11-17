
// Iterative Solution
const fibonacci = num => {
    //initialize the array with [0, 1] since these numbers are gonna be same for all the fibonacci sequence
    let arr = [0,1];
    // loop starting from index 2 until num + 1
    for(let i = 2; i < num + 1 ; i++) {
        // add the numbers on those indexes and push it to the array
        arr.push( arr[i - 2] + arr[i -1]);
    }
    return console.log(arr[num])
}

// Recursion Solution

const fib = (num) => {
    if (num < 2) {
        return num;
    }
  
    return (fib(num - 1) + fib(num - 2));
}

//fibonacci(4);

fib(4);