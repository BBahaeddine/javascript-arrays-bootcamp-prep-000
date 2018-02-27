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

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, element];
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
  
}