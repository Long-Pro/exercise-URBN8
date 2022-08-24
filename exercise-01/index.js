const arr=[5, 9, 6, 8, 4, 6]

function sumOfArray(arr,n){
  if (n == 0) return arr[0];
  return arr[n] + sumOfArray(arr, n - 1);
}

const res=sumOfArray(arr,arr.length-1)
console.log(res)