// Determine if in production or Development:

if (process.env.NODE_ENV === "production"){
    // in Production
    module.exports = require('./prod');
}
else {
    // in Development
    module.exports = require('./dev');
}