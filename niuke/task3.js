// 题目名: 快速排序

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    var p = Math.floor(arr.lenth / 2);

    var pValue = arr.splice(p, 1)[0];

    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++){
        if(arr[i] <= pValue){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pValue, ...quickSort(right)]
}

console.log(quickSort([1,5,55,158,5,89,9,87,156,3,48,6786,12,78,123,87,45,56,84,56,5848,3145,14565,3,5,6548,8]));