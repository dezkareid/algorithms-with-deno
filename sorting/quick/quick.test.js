import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { sortedTestArray, testArray} from "../common.js"
import quickSort from "./index.js";

Deno.test("Should return sortedArray", () => {
  const result = quickSort([...testArray], 0, testArray.length - 1);
  sortedTestArray.forEach((item, index) => assertEquals(item, result[index]));
});
