/**
 * Created by liusion on 17-4-15.
 */
var sayHello = require('../src/hello');
describe("Hello", function() {
    it("says hello", function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
});