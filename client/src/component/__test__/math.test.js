exports.sum = function(a, b) {
  return a + b;
};

export function ten() {
  return 10;
}

export function sum(a, b) {
    // what should I do to pass the test???
    if (isNaN(a) || isNaN(b)) {
      return null
    }
    if (
      typeof a !== 'number' ||
      typeof b !== 'number'
    ) {
      return null
    }
    return a + b
  }
