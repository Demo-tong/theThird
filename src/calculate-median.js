function calculate_median(arr) {
    var arrLength = arr.length;
    var myArray = [];

    for (i = 0; i < arrLength; ++i) {

        if ((i + 1) % 2 === 0) {
            myArray.push(arr[i]);
        }
    }

    return computTheMedian(myArray);
}

function computTheMedian(myArray) {
    var length = myArray.length;

    if ((length % 2) === 0) {

        return (myArray[length / 2 - 1] + myArray[length / 2]) / 2;
    }
    else {

        return myArray[parseInt(length / 2)];
    }
}

module.exports = calculate_median;
