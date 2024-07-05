module.exports.pickAndFixResponse = (status, message, data) => {
    return {
        "status": status,
        "message":message,
        "data":data
    }
}