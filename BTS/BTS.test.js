import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import BTS from './index.js';

Deno.test("When BTS is created BTS.value property takes the value", () => {
  const value = 50;
  const bts = new BTS(value);
  assertEquals(bts.value, value);
});

Deno.test("When BTS doesn't have left or right, value will be inserted in left if is less or right if is greater", () => {
  const value = 50;
  const bts = new BTS(value);
  const leftValue = 10;
  bts.insert(leftValue);
  const rightValue = 60;
  bts.insert(rightValue);
  assertEquals(bts.left.value, leftValue);
  assertEquals(bts.right.value, rightValue);
});

Deno.test("When BTS with values: 50, 34, 72, 282, 10 getMin should return value equal to 10", () => {
  const bts = new BTS(50);
  bts.insert(34);
  bts.insert(72);
  bts.insert(282);
  const minValue = 10;
  bts.insert(minValue);
  assertEquals(bts.getMin(), minValue);
});

Deno.test("When BTS contains value should return true", () => {
  const bts = new BTS(50);
  bts.insert(34);
  bts.insert(72);
  bts.insert(282);
  const value = 10;
  bts.insert(value);
  assert(bts.contains(value));
});

Deno.test("When BTS not contains value should return false", () => {
  const bts = new BTS(50);
  bts.insert(34);
  bts.insert(72);
  bts.insert(282);
  assert(!bts.contains(0));
});

Deno.test("When value is removed from BTS should not contains the value", () => {
  const bts = new BTS(50);
  bts.insert(34);
  bts.insert(72);
  bts.insert(282);
  const value = 10;
  bts.insert(value);
  bts.remove(value);
  assert(!bts.contains(value));
});

Deno.test("When value to remove is first BTS should be removed and value should be the min value from right BTS", () => {
  const valueRoot = 50;
  const bts = new BTS(valueRoot);
  bts.insert(34);
  bts.insert(72);
  bts.insert(60);
  bts.insert(282);
  bts.insert(10);
  bts.remove(valueRoot);
  assert(!bts.contains(valueRoot));
  assertEquals(bts.value, 60);
});
