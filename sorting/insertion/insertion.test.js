import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { sortedTestArray, testArray} from "../common.js"
import insertionSort from "./index.js";

Deno.test("Should return sortedArray", () => {
  const result = insertionSort([...testArray]);
  sortedTestArray.forEach((item, index) => assertEquals(item, result[index]));
});
