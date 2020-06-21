//function to sort an array using selection sort algorithm
function selectionSort(arr){
    if(arr.length === 0) return [];
    const min = Math.min(...arr);
    const minInd = arr.indexOf(min);
    const rest = arr.slice(1);
    rest[minInd - 1] = arr[0];
    return [min].concat(selectionSort(rest));
}

//testing the selectionSort function
console.log(selectionSort([5,4,3,2,1])); //output : [1,2,3,4,5]