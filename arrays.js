var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  // array.unshift(element);
  
  var secondArray = [element, ...array];
  
  return secondArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

function addElementToEndOfArray() {
  
}

function destructivelyAddElementToEndOfArray() {
  
}