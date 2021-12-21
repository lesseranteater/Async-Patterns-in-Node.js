// This is pseudocode

function doAsyncWork(resolve, reject){
  // perform async calls
  if(success){
    resolve(data);
  } else {
    reject (reason);
  }
}

let myPromise = new Promise(doAsyncWork);

let myPromise = new Promise((resolve, reject) => {
  if (success){
    resolve(data);
  } else {
    reject(reason);
  }
});

MethodThatReturnsPromise()
  .then(data => console.log(data)) // if the promise is resolved
  .catch(error => console.log(error)) // if the promise is reject
  .finally(() => console.log("All done!")); // called in both cases

async function getData(){
  let rawData = await MethodThatReturnsPromise(); // automatically unwinds the data from the Promise
  return JSON.parse(rawData);
}

getData()
.then(data => console.log(data))
.catch(error => console.log(error));