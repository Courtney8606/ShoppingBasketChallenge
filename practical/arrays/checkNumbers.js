const checkLength = (number) => {
    if (number.length <= 10) {
        return true;
    } else {
        return false;
    }
}

const filterLongNumbers = (array) => {
    return array.filter(checkLength);
}

module.exports = filterLongNumbers
module.exports = checkLength