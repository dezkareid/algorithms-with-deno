import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { sortedTestArray, testArray} from "../common.js"
import bubbleSort from "./index.js";

Deno.test("Should return sortedArray", () => {
  const result = bubbleSort(testArray);
  sortedTestArray.forEach((item, index) => assertEquals(item, result[index]));
});
