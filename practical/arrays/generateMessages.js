const generateMessages = (arraynamesdiscount) => {
    return arraynamesdiscount.map(person => {
        return 'Hi ' + person.name + '! ' + person.discount + '% off our best candies for you today!';
    });
};

// person is just a variable name chosen to represent each element of the arraynamesdiscount array as it's being processed - it's assumes each element is an object representing a person 



// const generateMessages = (nameList) => {
//     return nameList.map((name) => {
//         return 'Hi ' + name + '! 50% off our best candies for you today!';
//     });
// }

module.exports = generateMessages