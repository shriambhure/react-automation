// in this file you can append custom step methods to 'I' object
const assert = require('chai').assert

// Define custom steps here, use 'this' to access default methods of I.
// It is recommended to place a general 'login' function here.

module.exports = function() {


  return actor({

    //Overriding assertion methods.
    assertEqual(actual, expected, message) {
      assert.equal(actual, expected, message);
    },

    assertNotEqual(actual, expected, message) {
      assert.notEqual(actual, expected, message);
    },

    assertFail(message) {
      assert.fail(message);
    }


  });
}
