const testList = [1, 2, 3, 4, 5, 6, 7];
const testListSum = testList.reduce((previousValue, nextValue) => {
    return previousValue + nextValue;
});

module.exports = {list: testList, sum: testListSum};
