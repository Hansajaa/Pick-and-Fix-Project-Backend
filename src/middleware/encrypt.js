const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    const pw = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(pw, salt);
    req.body.password = encryptedPassword;
    next();
}