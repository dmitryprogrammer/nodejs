const testList = [1, 2, 3, 4, 5, 6, 7];
const testListSum = testList.reduce((previousValue, nextValue) => {
    return previousValue + nextValue;
});

exports.list = testList;
exports.sum = testListSum;
