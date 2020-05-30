import LinkedList from "./LinkedList.js"
import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("When Insert an element his value is equal to list.head.value", () => {
  const list = new LinkedList();
  const value1 = 10;
  list.insert(value1);
  assertEquals(value1, list.head.value);
  const value2 = 20;
  list.insert(value2);
  assertEquals(value2, list.head.value);
});

Deno.test("When List has one element and is removed head should be null", () => {
  const list = new LinkedList();
  list.insert(10);
  list.remove();
  assertEquals(list.head, null);
});

Deno.test("When List two or more elements and one is removed this.head.value  should be equal to penultimate value", () => {
  const list = new LinkedList();
  list.insert(10);
  list.insert(20);
  list.remove();
  assertEquals(list.head.value, 10);
});

Deno.test("When List contains value should return true", () => {
  const list = new LinkedList();
  list.insert(10);
  list.insert(20);
  list.insert(30)
  assert(list.contains(30));
});

Deno.test("When List not contains value should return false", () => {
  const list = new LinkedList();
  list.insert(10);
  list.insert(20);
  list.insert(30)
  assert(!list.contains(0));
});