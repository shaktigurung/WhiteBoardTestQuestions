//Promise
const promise1 = new Promise((resolve, reject) => {
    //console.log("I am inside promise");
    throw error = new Error("I am error");
    resolve();
}).catch(error)
{console.log(error)};

//********** Result : Error: I am error

let promise = new Promise(function(resolve, reject) {
    resolve("done");
    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
  });

//********** Result : Empty 

//Try catch Exercise
try {
    throw new Error("Some thing happened")
  }
  catch(err) {
    console.log(err);
  }
//********** Result : Error: Some thing happened