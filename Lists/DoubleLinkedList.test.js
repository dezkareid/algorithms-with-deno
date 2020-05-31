import DoubleLinkedList from "./DoubleLinkedList.js"
import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("When List is empty and Insert an element is in head or tail both should be equal", () => {
  let list = new DoubleLinkedList();
  const value = 10;
  list.insertHead(value);
  assertEquals(list.head, list.tail);
  list = new DoubleLinkedList();
  list.insertTail(value);
  assertEquals(list.head, list.tail);
  
});

Deno.test("When List is not empty and Insert an element in head or tail value should be equal and new tail.previous or head.next points to last nodes", () => {
  const list = new DoubleLinkedList();
  const value = 20;
  list.insertHead(value);
  const lastHead = list.head;
  const lastTail = list.tail;
  list.insertHead(10);
  list.insertTail(30);
  assertEquals(list.head.next, lastHead);
  assertEquals(list.tail.previous, lastTail);
});

Deno.test("When List has one element and element is removed from head or tail this properties should  be null", () => {
  const list = new DoubleLinkedList();
  const value = 20;
  list.insertHead(value);
  list.removeHead();
  assertEquals(list.head, null);
  assertEquals(list.tail, null);
  list.insertTail(30);
  list.removeTail();
  assertEquals(list.head, null);
  assertEquals(list.tail, null);
});

Deno.test("When List two or more elements and one is removed should points to next reference if is removed from head and previous if is removed from tail ", () => {
  const list = new DoubleLinkedList();
  list.insertHead(20);
  list.insertHead(10);
  list.insertTail(30);
  const nextHead = list.head.next;
  const previousTail = list.tail.previous;
  list.removeHead();
  list.removeTail();
  assertEquals(list.head, nextHead);
  assertEquals(list.tail, previousTail);
});

Deno.test("When List contains value should return true", () => {
  const list = new DoubleLinkedList();
  list.insertHead(20);
  list.insertHead(10);
  list.insertTail(30)
  assert(list.contains(30));
});

Deno.test("When List not contains value should return false", () => {
  const list = new DoubleLinkedList();
  list.insertHead(10);
  list.insertTail(20);
  list.insertTail(30);
  assert(!list.contains(0));
});
