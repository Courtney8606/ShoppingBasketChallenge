const notifyByEmail = (email) => {
    return 'Email sent to: ' + email;
}

const notifyByText = (number) => {
    return 'Text sent to: ' + number;
}

const notify = (string, notifyFunction) => {
    return notifyFunction(string);
}

console.log(notify('test@123.com', notifyByEmail));
console.log(notify('0112233445', notifyByText));