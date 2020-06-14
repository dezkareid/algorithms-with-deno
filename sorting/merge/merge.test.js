import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { sortedTestArray, testArray} from "../common.js"
import mergeSort from "./index.js";

Deno.test("Should return sortedArray", () => {
  const result = mergeSort([...testArray]);
  sortedTestArray.forEach((item, index) => assertEquals(item, result[index]));
});
