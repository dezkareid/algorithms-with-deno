import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import Stack from './index.js';

Deno.test("When a value is pushed in stack the top property has that value", () => {
  const stack = new Stack();
  let value = 10;
  stack.push(value);
  assertEquals(stack.top.value, value);
  value = 20;
  stack.push(value);
  assertEquals(stack.top.value, value);
});

Deno.test("When stack is empty and method pop is executed should return null", () => {
  const stack = new Stack();
  const element = stack.pop();
  assertEquals(element, null);
});

Deno.test("When stack has one and method pop is executed top property should be null", () => {
  const stack = new Stack();
  stack.push(10);
  stack.pop();
  assertEquals(stack.top, null);
});

Deno.test("When Stack contains value should return true and top remains equals", () => {
  const stack = new Stack();
  stack.push(30);
  stack.push(20);
  stack.push(10);
  const top = stack.top;
  assert(stack.contains(30));
  assertEquals(stack.top, top);
});

Deno.test("When Stack is empty should return false", () => {
  const stack = new Stack();
  assert(!stack.contains(30));
});

Deno.test("When Stack not contains value should return false and top remains equals", () => {
  const stack = new Stack();
  stack.push(30);
  stack.push(20);
  stack.push(10);
  const top = stack.top;
  assert(!stack.contains(0));
  assertEquals(stack.top, top);
});