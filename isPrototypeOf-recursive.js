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
  /* Edge cases */
  // Abort if testObject does not have a prototype.
  if (Object.getPrototypeOf(testObject) === undefined) {
    return false;
  }
  // Abort if testObject has a prototype and prototypeObject is Object.prototype.
  // This one is to just save resources doing lookups on the prototype chain for an obvious prototype.
  if (Object.getPrototypeOf(testObject) !== undefined && prototypeObject === Object.prototype) {
    return true;
  }
  // Throw error if prototypeObject is undefined or null.
  if (prototypeObject === undefined || prototypeObject === null) {
    throw new TypeError;
  }

  /* Base cases */
  // Stop if prototypeObject is found in testObject's prototype chain.
  if (Object.getPrototypeOf(testObject) === prototypeObject) {
    return true;
  }
  // Stop if null is reached in testObject's prototype chain.
  if (Object.getPrototypeOf(testObject) === null) {
    return false
  }

  /* Recursive case */
  // Recursively traverse through testObject's prototype chain until prototypeObject is found or null is reached.
  return isPrototypeOf(prototypeObject, Object.getPrototypeOf(testObject))
}