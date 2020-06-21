//function to sort an array using quick sort algorithm
function quickSort(arr){
    if(arr.length === 0) return [];
    const [curr, ...rest] = arr;
    const left = rest.filter(x => x <= curr);
    const right = rest.filter(x => x > curr);
    return quickSort(left)
    .concat(curr)
    .concat(quickSort(right));
}

//testing the quickSort function
console.log(quickSort([5,4,3,2,1])); //output : [1,2,3,4,5]