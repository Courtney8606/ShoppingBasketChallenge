const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (message, transformFunction) => {
    return transformFunction(message)
}

console.log(transform('WHY ARE YOU SHOUTING', lowercaseMessage))


