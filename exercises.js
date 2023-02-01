//flattening list
let arrays = [[1, 2, 3], [4, 5], [6]];
let flatArray = arrays.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, [])

console.log(flatArray)

//function loop
function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}
loop(3, n => n > 0, n => n - 1, console.log)

//everyLoop and everySome
function everyLoop(array, test) 
{
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}

function everySome(array, test) 
{
return !array.some(element => !test(element));
} 

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true