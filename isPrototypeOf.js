// Function signature:
  // isPrototypeOf(prototypeObject, testObject)

// Parameters:
  // prototypeObject: The prototype object.
  // testObject: The object whose prototype chain will be searched.

// Return value:
  // A Boolean indicating whether prototypeObject lies in the prototype chain of testObject.

// Requirements:
  // It should return true if prototypeObject is in the prototype chain of testObject.
  // It should return false if prototypeObject is not in the prototype chain of testObject.
  // It should work for any number of prototype links.

// Edge cases:
  // It should return false if testObject does not have a prototype.
  // It should return true if testObject has a prototype and prototypeObject is Object.prototype.
  // It should throw TypeError if prototypeObject is undefined or null.

function isPrototypeOf(prototypeObject, testObject) {
  // Abort if testObject does not have a prototype.
  if (testObject.__proto__ === undefined) {
    return false;
  }
  // Abort if testObject has a prototype and prototypeObject is Object.prototype.
  // This one is to just save time doing lookups for an obvious prototype.
  if (testObject.__proto__ !== undefined && prototypeObject === Object.prototype) {
    return true;
  }
  // Abort if prototypeObject is undefined or null.
  if (prototypeObject === undefined || prototypeObject === null) {
    throw new TypeError;
  }

  // Iteratively traverse through testObject's prototype chain until prototypeObject is found or null is reached.
  while (testObject.__proto__ !== null) {
    if (testObject.__proto__ === prototypeObject) {
      return true;
    }
    testObject = testObject.__proto__;
  }
  return false;
}