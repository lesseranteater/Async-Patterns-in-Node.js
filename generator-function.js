function* generatorFunction() {
    console.log("Start of generator function");
    let x = 5;
    yield x; // returns the value and pauses the function until it is explicitly resumed

    x++;
    let y = yield x; // y is assigned the value passed to next()
    return x + y;
}

let iterator = generatorFunction();
console.log(iterator.next().value); // the function returns 5 and pauses
console.log(iterator.next().value); // the function returns 6 and pauses before the value is assigned to y
console.log(iterator.next(4).value); // the value 4 is assigned to y and the sum of x and y which is 10 is returned

console.log("All done!");
// OUTPUT:
// Start of generator function
// 5
// 6
// 10
// All done!
