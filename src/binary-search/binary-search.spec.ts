import { describe, expect, it } from "vitest";

import { binarySearch } from "./binary-search";

describe("Binary search", () => {
  it("should return null if the array is empty", () => {
    expect(binarySearch([], 1)).toBe(null);
  });

  it("should return null if the target is not found", () => {
    expect(binarySearch([1, 2, 3], 4)).toBe(null);
  });

  it("should return the index of the target with odd elements", () => {
    const orderedArray = [1, 2, 3, 4, 5, 9, 12, 15];
    const targetValue = 3;
    const targetIndex = orderedArray.indexOf(targetValue); // value = 2

    expect(binarySearch(orderedArray, targetValue)).toBe(targetIndex);
  });

  describe("should return the index of the target with even elements", () => {
    const orderedArray = [
      1, 2, 3, 4, 5, 9, 12, 15, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      32,
    ];

    it.each(orderedArray)(`finding -> %i`, (targetValue) => {
      const targetIndex = orderedArray.indexOf(targetValue);

      expect(binarySearch(orderedArray, targetValue)).toBe(targetIndex);
    });
  });

  describe("book example", () => {
    const orderedArray = [1, 3, 5, 7, 9];

    it("finding for number 3 in my list", () => {
      const targetValue = 3;
      const targetIndex = orderedArray.indexOf(targetValue);

      expect(binarySearch(orderedArray, targetValue)).toBe(targetIndex);
    });

    it("finding an invalid number in my list and receiving null", () => {
      const targetValue = -1;

      expect(binarySearch(orderedArray, targetValue)).toBe(null);
    });
  });

  describe("using negative values", () => {
    const orderedArray = [
      -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -15, -12,
      -9, -5, -4, -3, -2, -1,
    ];

    it.each(orderedArray)(`finding -> %i`, (targetValue) => {
      const targetIndex = orderedArray.indexOf(targetValue);

      expect(binarySearch(orderedArray, targetValue)).toBe(targetIndex);
    });
  });

  describe("With negative and positive values", () => {
    const orderedArray = [
      -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -15, -12,
      -9, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 9, 12, 15, 20, 21, 22, 23, 24,
      25, 26, 27, 28, 29, 30, 31, 32,
    ];

    it.each(orderedArray)(`finding -> %i`, (targetValue) => {
      const targetIndex = orderedArray.indexOf(targetValue);

      expect(binarySearch(orderedArray, targetValue)).toBe(targetIndex);
    });
  });
});
