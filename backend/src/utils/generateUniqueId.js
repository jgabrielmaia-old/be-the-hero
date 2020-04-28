const crypto = require('crypto');

module.exports = function generateUniqueId(randomBytes){
    return crypto.randomBytes(randomBytes).toString('HEX');
}