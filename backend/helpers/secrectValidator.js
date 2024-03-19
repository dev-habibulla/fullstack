
let secrectValidator = (secrect) => {
    if (secrect.length < 6) {
        return true
    } else {
        return false
    }
}

module.exports = secrectValidator;