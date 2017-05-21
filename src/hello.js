/**
 * Created by liusion on 17-4-15.
 */
var _ = require('lodash');
module.exports = function sayHello(to) {
    return _.template("Hello, <%= name %>!")({name: to});
};