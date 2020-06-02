import Queue from "./index.js"
import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("When Queue is empty and enqueue an element front and top should be equal", () => {
  const queue = new Queue();
  const value = 10;
  queue.enqueue(value);
  assertEquals(queue.front, queue.top);
});

Deno.test("When Queue is not empty and enqueue an element top remains equal and top.value should be equal to new one, lasttop.next should point to new one top", () => {
  const queue = new Queue();
  const value = 10;
  queue.enqueue(value);
  const lastFront = queue.front;
  const lastTop = queue.top;
  const newValue = 20;
  queue.enqueue(newValue);
  assertEquals(queue.front, lastFront);
  assertEquals(queue.top.value, newValue);
  assertEquals(lastTop.next, queue.top);
});

Deno.test("When Queue has one element and element is dequeued front and top should be null", () => {
  const queue = new Queue();
  const value = 10;
  queue.enqueue(value);
  queue.dequeue();
  assertEquals(queue.front, null);
  assertEquals(queue.top, null);
});

Deno.test("When Queue has two elements and one is dequeued the front and top should be equals and front.nex should be null", () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.dequeue();
  queue.dequeue();
  assertEquals(queue.front, queue.top);
  assertEquals(queue.front.next, null);
});

Deno.test("When Queue has two or more elements and one is dequeued the front change to next element", () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  const nextFront = queue.front.next;
  queue.dequeue();
  assertEquals(queue.front, nextFront);
});

Deno.test("When Queue contains value should return true and front and order remains equals", () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  const front = queue.front;
  assert(queue.contains(30));
  assertEquals(queue.front, front);
  assertEquals(front.next.value, 20);
});

Deno.test("When Queue is empty should return false", () => {
  const queue = new Queue();
  assert(!queue.contains(30));
});

Deno.test("When Queue not contains value should return false and front remains equals", () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  const front = queue.front;
  assert(!queue.contains(0));
  assertEquals(queue.front, front);
  assertEquals(front.next.value, 20);
});
