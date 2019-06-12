
 swap = (items, firstIndex, secondIndex) => {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};

//divides the array into two parts
 partition = (array, left, right) => {
    let pivot = array[Math.floor((right + left) / 2)],
        less = left,
        greater = right;

    while (less <= greater) {
        while (array[less] < pivot) {
            less++;
        }
        while (array[greater] > pivot) {
            greater--;
        }
        if (less <= greater) {
            swap(array, less, greater);
            less++;
            greater--;
        }
    }
    return less;
};

quickSort = (array, left = 0, right = array.length - 1) => {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return array;
};


 sort = () => {
    let inputArray = document.getElementById('input-arr').value;

    let regular =/^[0-9,-]+$/;
    if(!regular.test(inputArray)) return alert('Not valid array');

    let outputArray = inputArray.split(',');

    for(let i=0; i<outputArray.length;i++) outputArray[i] = +outputArray[i]; // convert string -> number

    let sortArray =  quickSort(outputArray);

    document.getElementById('length-arr').innerHTML = outputArray.length;

    return document.getElementById('output-arr').innerHTML = sortArray ;
};



