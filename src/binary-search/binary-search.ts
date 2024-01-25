import { BinarySearch } from "./binary-search.types";

const VOID_LENGTH = 0;

export const binarySearch: BinarySearch = (
  orderedArray,
  target,
  startIndex = 0,
  endIndex = orderedArray.length - 1
) => {
  if (orderedArray.length === VOID_LENGTH) {
    return null;
  }

  if (startIndex > endIndex) {
    return null;
  }

  const sumOfEdges = startIndex + endIndex;

  // * if the start and end index was summed was Even, need to round to floor
  const middleIndex = Math.floor(sumOfEdges / 2);

  const middleValue = orderedArray[middleIndex];

  // * Check if the element in the middle is my target
  if (middleValue === target) {
    return middleIndex;
  }

  // * Check if the element is on the left
  if (target < middleValue) {
    const newEndIndex = middleIndex - 1;
    return binarySearch(orderedArray, target, startIndex, newEndIndex);
  }

  // * Check if the element is on the right the middle element
  if (target > middleValue) {
    const newStartIndex = middleIndex + 1;
    return binarySearch(orderedArray, target, newStartIndex);
  }

  return null;
};
