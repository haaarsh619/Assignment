
function Find_largest(array, n){

    array.sort(function(a, b) {
        return b - a;
      });

    let i = n - 1;
    return array[i];
}
const arr = [22,32,42,52,62]
console.log(Find_largest(arr, 3))