const addToBatch = (batch, order_id) => {
    if (batch.length < 5) {
        return batch.concat(order_id);
    } else {
        return batch
    }
}

module.exports = addToBatch