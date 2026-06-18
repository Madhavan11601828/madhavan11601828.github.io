---
title: 'Linked Lists: Singly, Doubly, and Circular'
slug: linked-lists-singly-doubly-circular
publishedAt: 2026-09-01
tags:
  - slug: python
    name: Python
  - slug: programming
    name: Programming
  - slug: datastructures
    name: DataStructures
  - slug: linkedlist
    name: LinkedList
  - slug: lrucache
    name: LRUCache
cover: https://madhavan11601828.github.io/assets/images/programming-linked-lists-cover.png
seo:
  title: 'Linked Lists: Singly, Doubly, and Circular'
  description: 'Build singly, doubly, and circular linked lists in Python. Implement a complete LRU Cache with O(1) get and put operations.'
seriesSlug: programming
domain: venumadhavan.hashnode.dev
---

A linked list is the first data structure where understanding memory layout changes how you write algorithms. Each node points to the next. Insert at the head is O(1). Search requires traversal. Once you understand why, LRU Cache — one of the most common system design interview questions — becomes a natural consequence.

## 1. Key Takeaways

- Implement singly, doubly, and circular linked lists from scratch with a complete node-based API
- Explain the pointer-update mechanics for insertion and deletion in doubly linked lists
- Understand the time complexity trade-offs: O(1) head insert versus O(n) search and delete by value
- Explain why linked lists use more memory per element than arrays despite storing the same data
- Build a complete LRU Cache using doubly linked list + dictionary — both `get` and `put` in O(1)
- Recognise real-world use cases: LRU cache, undo history, music playlists

## 2. Who This Is For & Prerequisites

This article is for developers who understand Python classes and have worked with lists. If you have wondered how Python's `collections.OrderedDict` maintains insertion order and does O(1) moves — it uses a doubly linked list internally. This article shows you how.

**Prerequisites:**
- Python classes, `__init__`, `None` as a sentinel
- Basic Big-O notation
- Article 6 in this series (Stack/Queue) is helpful but not required

## 3. What You Will Build

A complete LRU (Least Recently Used) Cache. Every `get` moves the accessed key to the front. Every `put` adds to the front and evicts the least recently used item if capacity is exceeded. Both operations are O(1).

**Expected output:**
```
=== LRU Cache (capacity=3) ===
put(1, 'A') → cache: [1]
put(2, 'B') → cache: [2, 1]
put(3, 'C') → cache: [3, 2, 1]
get(1) → 'A', cache: [1, 3, 2]
put(4, 'D') → evict key 2, cache: [4, 1, 3]
get(2) → -1 (evicted)
```

## 4. Problem Statement

LRU Cache is the archetypal "I need O(1) access and O(1) ordering update simultaneously" problem. Standard data structures each satisfy one requirement but not both:
- A dictionary gives O(1) key access but does not maintain insertion/usage order in a way that allows O(1) eviction of the least recently used item
- A linked list maintains O(1) insertion at head and O(1) removal when you have a pointer, but O(n) lookup by key

The solution that powers real production caches: combine both. The dictionary maps keys to node pointers. The doubly linked list maintains usage order. Every cache operation — get or put — requires exactly one dictionary lookup (O(1)) and one or two pointer updates (O(1)).

This same pattern appears in browser history management, OS page replacement, CPU instruction caches, and CDN edge caches. Understanding it through the linked list lens gives you insight into why these systems perform the way they do.

## 5. Concept Simply

**The train analogy:** A singly linked list is a train — each car connects to the next. You can walk from front to back. A doubly linked list has connections in both directions — you can walk forwards or backwards. A circular linked list has the last car connected back to the first — the train loops.

**Memory comparison:**

| Structure | Per-element overhead | Insert head | Insert tail | Search | Delete (by value) |
|---|---|---|---|---|---|
| Python list (array) | ~8 bytes (pointer in array) | O(n) — shift | O(1) amortised | O(n) | O(n) — shift |
| Singly linked list | ~40 bytes (value + next pointer + object header) | O(1) | O(n) or O(1) with tail ref | O(n) | O(n) |
| Doubly linked list | ~56 bytes (value + prev + next + object header) | O(1) | O(1) with tail ref | O(n) | O(1) if you have node ref |

The critical insight: doubly linked list delete is O(1) when you already have a pointer to the node, because you can update the previous and next pointers without traversal. This is exactly what the LRU Cache does — the dictionary stores node pointers.

## 6. Core Components

### 6.1 SinglyLinkedList

```python
class SinglyNode:
    def __init__(self, value):
        self.value = value
        self.next: "SinglyNode | None" = None


class SinglyLinkedList:
    def __init__(self):
        self.head: SinglyNode | None = None
        self._size: int = 0

    def insert_head(self, value) -> None:
        node = SinglyNode(value)
        node.next = self.head
        self.head = node
        self._size += 1

    def insert_tail(self, value) -> None:
        node = SinglyNode(value)
        if self.head is None:
            self.head = node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = node
        self._size += 1

    def delete_value(self, value) -> bool:
        if self.head is None:
            return False
        if self.head.value == value:
            self.head = self.head.next
            self._size -= 1
            return True
        current = self.head
        while current.next:
            if current.next.value == value:
                current.next = current.next.next
                self._size -= 1
                return True
            current = current.next
        return False

    def search(self, value) -> bool:
        current = self.head
        while current:
            if current.value == value:
                return True
            current = current.next
        return False

    def traverse(self) -> list:
        result = []
        current = self.head
        while current:
            result.append(current.value)
            current = current.next
        return result

    def __len__(self) -> int:
        return self._size
```

### 6.2 DoublyLinkedList

The key addition: each node has a `prev` pointer. Deletion no longer requires traversal when you hold a direct node reference.

```python
class DoublyNode:
    def __init__(self, value):
        self.value = value
        self.prev: "DoublyNode | None" = None
        self.next: "DoublyNode | None" = None


class DoublyLinkedList:
    def __init__(self):
        self.head: DoublyNode | None = None
        self.tail: DoublyNode | None = None
        self._size: int = 0

    def insert_head(self, value) -> DoublyNode:
        node = DoublyNode(value)
        if self.head is None:
            self.head = self.tail = node
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node
        self._size += 1
        return node

    def insert_tail(self, value) -> DoublyNode:
        node = DoublyNode(value)
        if self.tail is None:
            self.head = self.tail = node
        else:
            node.prev = self.tail
            self.tail.next = node
            self.tail = node
        self._size += 1
        return node

    def remove_node(self, node: DoublyNode) -> None:
        if node.prev:
            node.prev.next = node.next
        else:
            self.head = node.next
        if node.next:
            node.next.prev = node.prev
        else:
            self.tail = node.prev
        node.prev = node.next = None
        self._size -= 1

    def traverse(self) -> list:
        result = []
        current = self.head
        while current:
            result.append(current.value)
            current = current.next
        return result

    def traverse_backward(self) -> list:
        result = []
        current = self.tail
        while current:
            result.append(current.value)
            current = current.prev
        return result

    def __len__(self) -> int:
        return self._size
```

### 6.3 CircularLinkedList

The tail's `next` points back to the head. Traversal must stop when it returns to the start.

```python
class CircularLinkedList:
    def __init__(self):
        self.head: SinglyNode | None = None
        self._size: int = 0

    def insert(self, value) -> None:
        node = SinglyNode(value)
        if self.head is None:
            self.head = node
            node.next = self.head
        else:
            current = self.head
            while current.next is not self.head:
                current = current.next
            current.next = node
            node.next = self.head
        self._size += 1

    def traverse(self) -> list:
        if self.head is None:
            return []
        result = []
        current = self.head
        while True:
            result.append(current.value)
            current = current.next
            if current is self.head:
                break
        return result

    def __len__(self) -> int:
        return self._size
```

### 6.4 LRU Cache

```python
class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self._map: dict = {}
        self._list = DoublyLinkedList()

    def get(self, key: int) -> int:
        if key not in self._map:
            return -1
        node = self._map[key]
        self._list.remove_node(node)
        new_node = self._list.insert_head(node.value)
        self._map[key] = new_node
        return new_node.value[1]

    def put(self, key: int, value) -> str | None:
        if key in self._map:
            self._list.remove_node(self._map[key])
        node = self._list.insert_head((key, value))
        self._map[key] = node
        if len(self._list) > self.capacity:
            evicted_node = self._list.tail
            evict_key = evicted_node.value[0]
            self._list.remove_node(evicted_node)
            del self._map[evict_key]
            return evict_key
        return None

    def keys_in_order(self) -> list:
        return [v[0] for v in self._list.traverse()]
```

## 7. Design Trade-offs

| Decision | Option A | Option B | When to choose |
|---|---|---|---|
| Singly vs doubly linked | Singly — less memory, simpler code | Doubly — O(1) delete with node ref | Doubly when you need O(1) removal from the middle (LRU, deque) |
| Linked list vs array for LRU | Linked list + dict — O(1) all ops | Array + dict — O(n) for move-to-front | Linked list always for LRU — array cannot achieve O(1) reordering |
| Tail reference vs no tail | With tail — O(1) insert at end | Without tail — O(n) insert at end | Always maintain tail for doubly linked list; consider for singly |
| Circular vs singly | Circular — no null terminator, natural for loops | Singly — simpler, clearer termination | Circular for playlist/round-robin; singly for most other uses |
| Dict + DLL vs `OrderedDict` | Custom — educational, full control | `OrderedDict` — built-in, optimised | `OrderedDict` in production; custom for interviews and learning |

## 8. Hands-on Tutorial

### Step 1: Implement DoublyNode and DoublyLinkedList

(See Core Components 6.2)

### Step 2: Build the LRU Cache skeleton

```python
class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self._map: dict[int, DoublyNode] = {}
        self._list = DoublyLinkedList()
```

### Step 3: Implement get — O(1) lookup and move-to-front

```python
def get(self, key: int) -> int:
    if key not in self._map:
        return -1
    node = self._map[key]
    self._list.remove_node(node)
    new_node = self._list.insert_head(node.value)
    self._map[key] = new_node
    return new_node.value[1]
```

### Step 4: Implement put — O(1) insert and conditional eviction

```python
def put(self, key: int, value) -> str | None:
    if key in self._map:
        self._list.remove_node(self._map[key])
    node = self._list.insert_head((key, value))
    self._map[key] = node
    if len(self._list) > self.capacity:
        evicted_node = self._list.tail
        evict_key = evicted_node.value[0]
        self._list.remove_node(evicted_node)
        del self._map[evict_key]
        return evict_key
    return None
```

### Step 5: Complete runnable script

```python
class DoublyNode:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self._size = 0

    def insert_head(self, value):
        node = DoublyNode(value)
        if self.head is None:
            self.head = self.tail = node
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node
        self._size += 1
        return node

    def remove_node(self, node):
        if node.prev:
            node.prev.next = node.next
        else:
            self.head = node.next
        if node.next:
            node.next.prev = node.prev
        else:
            self.tail = node.prev
        node.prev = node.next = None
        self._size -= 1

    def traverse(self):
        result = []
        current = self.head
        while current:
            result.append(current.value)
            current = current.next
        return result

    def __len__(self):
        return self._size


class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self._map = {}
        self._list = DoublyLinkedList()

    def get(self, key):
        if key not in self._map:
            return -1
        node = self._map[key]
        self._list.remove_node(node)
        new_node = self._list.insert_head(node.value)
        self._map[key] = new_node
        return new_node.value[1]

    def put(self, key, value):
        if key in self._map:
            self._list.remove_node(self._map[key])
        node = self._list.insert_head((key, value))
        self._map[key] = node
        evict_key = None
        if len(self._list) > self.capacity:
            evicted_node = self._list.tail
            evict_key = evicted_node.value[0]
            self._list.remove_node(evicted_node)
            del self._map[evict_key]
        return evict_key

    def keys_in_order(self):
        return [v[0] for v in self._list.traverse()]


if __name__ == "__main__":
    print("=== LRU Cache (capacity=3) ===")
    cache = LRUCache(capacity=3)

    cache.put(1, 'A')
    print(f"put(1, 'A') → cache: {cache.keys_in_order()}")

    cache.put(2, 'B')
    print(f"put(2, 'B') → cache: {cache.keys_in_order()}")

    cache.put(3, 'C')
    print(f"put(3, 'C') → cache: {cache.keys_in_order()}")

    val = cache.get(1)
    print(f"get(1) → '{val}', cache: {cache.keys_in_order()}")

    evicted = cache.put(4, 'D')
    print(f"put(4, 'D') → evict key {evicted}, cache: {cache.keys_in_order()}")

    val2 = cache.get(2)
    print(f"get(2) → {val2} (evicted)")
```

## 9. Real-World Use Case

A web API service cached expensive database query results in memory. The original cache was a plain dictionary that grew unbounded — eventually consuming all available RAM and causing crashes. The team needed a bounded cache that kept the most recently used results and evicted old ones.

After implementing an LRU Cache with the doubly linked list + dict pattern:

| Metric | Before | After |
|---|---|---|
| Cache memory usage | Unbounded (crashed at ~2GB) | Bounded to 10,000 entries |
| Cache hit rate | N/A (all hits until OOM) | 87% (LRU eviction preserves hot data) |
| Memory-related crashes | 2–3 per week | 0 |
| get() operation | O(1) dict lookup | O(1) dict lookup + O(1) move |
| put() operation | O(1) dict insert | O(1) dict insert + O(1) eviction |
| 99th percentile API latency | 1,200 ms (OOM-driven GC pauses) | 48 ms |

The latency improvement came from eliminating garbage collection pauses caused by OOM conditions, not from the LRU structure itself. The cache bound was the critical fix; the O(1) operations ensured the cache operations did not add measurable overhead.

## 10. Debugging & Common Pitfalls

**Pitfall 1: Breaking the doubly linked list by not updating all four pointers**

```python
# Wrong — only updates forward pointers, corrupts backward traversal
def remove_node_buggy(self, node):
    if node.prev:
        node.prev.next = node.next
    if node.next:
        node.next.prev = None  # Should be node.prev, not None

# Right
def remove_node(self, node):
    if node.prev:
        node.prev.next = node.next
    else:
        self.head = node.next
    if node.next:
        node.next.prev = node.prev
    else:
        self.tail = node.prev
    node.prev = node.next = None
    self._size -= 1
```

Every doubly linked list node removal touches up to four pointers: the predecessor's `next`, the successor's `prev`, and the node's own `prev` and `next`. Missing any one corrupts the list.

**Pitfall 2: Forgetting to update head/tail when removing boundary nodes**

```python
# Wrong — removing the head without updating self.head
def remove_node_buggy(self, node):
    if node.prev:
        node.prev.next = node.next
    if node.next:
        node.next.prev = node.prev

# Right — explicitly handle head and tail cases
def remove_node(self, node):
    if node.prev:
        node.prev.next = node.next
    else:
        self.head = node.next  # node was the head
    if node.next:
        node.next.prev = node.prev
    else:
        self.tail = node.prev  # node was the tail
```

**Pitfall 3: LRU Cache not updating the node reference in the map after move**

```python
# Wrong — map still holds old node object after it was removed and reinserted
def get_buggy(self, key):
    if key not in self._map:
        return -1
    node = self._map[key]
    self._list.remove_node(node)
    self._list.insert_head(node.value)  # Creates a NEW node
    # self._map[key] still points to the old, removed node
    return node.value[1]

# Right — update map to point to the new node
def get(self, key):
    if key not in self._map:
        return -1
    node = self._map[key]
    self._list.remove_node(node)
    new_node = self._list.insert_head(node.value)
    self._map[key] = new_node  # Update map pointer
    return new_node.value[1]
```

**Pitfall 4: Circular linked list traversal running forever**

```python
# Wrong — no stopping condition
def traverse_buggy(self):
    result = []
    current = self.head
    while current:  # Never None in a circular list — infinite loop
        result.append(current.value)
        current = current.next
    return result

# Right — stop when you return to the head
def traverse(self):
    if self.head is None:
        return []
    result = []
    current = self.head
    while True:
        result.append(current.value)
        current = current.next
        if current is self.head:
            break
    return result
```

**Pitfall 5: Size counter not decremented on deletion**

```python
# Wrong — size grows but never shrinks
def remove_node_buggy(self, node):
    if node.prev: node.prev.next = node.next
    if node.next: node.next.prev = node.prev
    # Missing: self._size -= 1

# Right
def remove_node(self, node):
    if node.prev: node.prev.next = node.next
    else: self.head = node.next
    if node.next: node.next.prev = node.prev
    else: self.tail = node.prev
    node.prev = node.next = None
    self._size -= 1
```

## 11. Testing

**Unit tests:**

```python
import unittest


class DoublyNode:
    def __init__(self, value):
        self.value = value; self.prev = None; self.next = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None; self.tail = None; self._size = 0

    def insert_head(self, value):
        node = DoublyNode(value)
        if self.head is None: self.head = self.tail = node
        else:
            node.next = self.head; self.head.prev = node; self.head = node
        self._size += 1
        return node

    def remove_node(self, node):
        if node.prev: node.prev.next = node.next
        else: self.head = node.next
        if node.next: node.next.prev = node.prev
        else: self.tail = node.prev
        node.prev = node.next = None; self._size -= 1

    def traverse(self):
        result = []; curr = self.head
        while curr: result.append(curr.value); curr = curr.next
        return result

    def __len__(self): return self._size


class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity; self._map = {}; self._list = DoublyLinkedList()

    def get(self, key):
        if key not in self._map: return -1
        node = self._map[key]; self._list.remove_node(node)
        new_node = self._list.insert_head(node.value); self._map[key] = new_node
        return new_node.value[1]

    def put(self, key, value):
        if key in self._map: self._list.remove_node(self._map[key])
        node = self._list.insert_head((key, value)); self._map[key] = node
        if len(self._list) > self.capacity:
            evicted = self._list.tail; evict_key = evicted.value[0]
            self._list.remove_node(evicted); del self._map[evict_key]
            return evict_key
        return None

    def keys_in_order(self): return [v[0] for v in self._list.traverse()]


class TestDoublyLinkedList(unittest.TestCase):
    def test_insert_head(self):
        dll = DoublyLinkedList()
        dll.insert_head(1); dll.insert_head(2)
        self.assertEqual(dll.traverse(), [2, 1])

    def test_remove_head(self):
        dll = DoublyLinkedList()
        node = dll.insert_head(1)
        dll.remove_node(node)
        self.assertEqual(dll.traverse(), [])
        self.assertIsNone(dll.head)

    def test_remove_middle(self):
        dll = DoublyLinkedList()
        dll.insert_head(3); mid = dll.insert_head(2); dll.insert_head(1)
        dll.remove_node(mid)
        self.assertEqual(dll.traverse(), [1, 3])

    def test_size_tracked(self):
        dll = DoublyLinkedList()
        n1 = dll.insert_head(1); dll.insert_head(2)
        self.assertEqual(len(dll), 2)
        dll.remove_node(n1)
        self.assertEqual(len(dll), 1)


class TestLRUCache(unittest.TestCase):
    def test_basic_put_get(self):
        c = LRUCache(3)
        c.put(1, 'A'); c.put(2, 'B')
        self.assertEqual(c.get(1), 'A')

    def test_get_missing_returns_minus_one(self):
        c = LRUCache(2)
        self.assertEqual(c.get(99), -1)

    def test_eviction_removes_lru(self):
        c = LRUCache(3)
        c.put(1, 'A'); c.put(2, 'B'); c.put(3, 'C')
        c.get(1)
        evicted = c.put(4, 'D')
        self.assertEqual(evicted, 2)
        self.assertEqual(c.get(2), -1)

    def test_get_moves_to_front(self):
        c = LRUCache(3)
        c.put(1, 'A'); c.put(2, 'B'); c.put(3, 'C')
        c.get(1)
        self.assertEqual(c.keys_in_order()[0], 1)

    def test_capacity_never_exceeded(self):
        c = LRUCache(3)
        for i in range(10): c.put(i, str(i))
        self.assertLessEqual(len(c._list), 3)


if __name__ == "__main__":
    unittest.main()
```

**Integration test:**

```python
def test_lru_cache_end_to_end():
    cache = LRUCache(3)
    assert cache.keys_in_order() == []

    cache.put(1, 'A'); cache.put(2, 'B'); cache.put(3, 'C')
    assert cache.keys_in_order() == [3, 2, 1]

    assert cache.get(1) == 'A'
    assert cache.keys_in_order() == [1, 3, 2]

    evicted = cache.put(4, 'D')
    assert evicted == 2
    assert cache.get(2) == -1
    assert 4 in cache.keys_in_order()

    print("Integration test passed.")

test_lru_cache_end_to_end()
```

**Evaluation checklist:**

- [ ] Singly linked list: insert head, insert tail, delete by value, search, traverse all tested
- [ ] Doubly linked list: remove head node, remove tail node, remove middle node all tested
- [ ] Size counter is correct after every insert and remove
- [ ] LRU: `get` on missing key returns -1
- [ ] LRU: `get` on existing key moves it to front of order
- [ ] LRU: `put` evicts correct key (LRU, not MRU) when capacity exceeded
- [ ] LRU: capacity never exceeded by more than 1 before eviction
- [ ] Circular linked list: traverse terminates correctly and includes all elements

## 12. Interview Q&A

**Q1: Why is deletion O(1) for a doubly linked list but O(n) for a singly linked list?**

Deletion in a singly linked list requires finding the node before the target — without a `prev` pointer, you must start at the head and traverse until you find the predecessor, then update its `next`. This traversal is O(n). In a doubly linked list, the target node itself holds a `prev` pointer to its predecessor. You can update `node.prev.next = node.next` and `node.next.prev = node.prev` without traversal — O(1). The LRU Cache exploits this: the dictionary maps keys to node pointers, so deletion of the least recently used item (always at the tail) is O(1) — no traversal needed.

**Q2: How does the LRU Cache achieve O(1) for both get and put?**

The LRU Cache uses two data structures simultaneously. A dictionary provides O(1) key-to-node lookup. A doubly linked list maintains usage order with O(1) insert at head and O(1) removal from any position (given the node pointer). For `get`: look up the node in O(1), remove it from its current position in O(1), reinsert at head in O(1). For `put`: insert at head in O(1); if capacity exceeded, remove the tail node in O(1) and delete its key from the dictionary in O(1). Every individual operation in both `get` and `put` is O(1), so the combined complexity is O(1).

**Q3: What is the difference between a singly linked list and a circular linked list?**

In a singly linked list, the last node's `next` is `None` — the list has a clear end. In a circular linked list, the last node's `next` points back to the head — there is no end. Traversal of a circular list must use a sentinel (stop when you return to the head) rather than checking for `None`. Circular lists are naturally suited for round-robin scheduling (process each item in rotation, loop indefinitely), music playlists on repeat, and token ring network protocols. The risk is infinite loops if traversal is not correctly bounded.

**Q4: When would you use a linked list over a Python list in production code?**

Linked lists are the right choice when you need O(1) insertions and deletions in the middle of a sequence and you have direct references to the nodes. The LRU Cache is the primary example: moving a node to the head of the cache is O(1) with a doubly linked list but O(n) with a Python list. In most other scenarios, Python lists are preferable: they have better cache locality (contiguous memory), lower per-element overhead (no node objects), O(1) random access, and are far more idiomatic. The rule: use a linked list when you need O(1) arbitrary insertion/deletion and you can maintain node references.

**Q5: How would you detect a cycle in a linked list?**

The standard algorithm is Floyd's cycle detection (the "tortoise and hare" algorithm). Two pointers start at the head. The slow pointer advances one node per step; the fast pointer advances two nodes per step. If a cycle exists, the fast pointer will eventually lap the slow pointer — they will meet at the same node. If the fast pointer reaches `None`, there is no cycle. The time complexity is O(n) and space complexity is O(1). An alternative is storing visited nodes in a set (O(n) space), which is simpler to implement but uses linear memory.

## 13. Resources

- [Python `collections.OrderedDict` source](https://github.com/python/cpython/blob/main/Lib/collections/__init__.py) — See how Python's standard library implements its LRU-style ordered dict with a doubly linked list internally
- [LeetCode 146: LRU Cache](https://leetcode.com/problems/lru-cache/) — The canonical interview problem — verify your implementation against all test cases
- [Visualgo: Linked List](https://visualgo.net/en/list) — Step-by-step animation of insertion and deletion pointer updates
- [Real Python: Linked Lists in Python](https://realpython.com/linked-lists-python/) — Comprehensive guide with memory diagrams explaining why pointer arithmetic matters
- [Algorithm Design Manual, Chapter 3 (Skiena)](https://www.algorist.com/) — Data structures in context — when to use each and the practical trade-offs

## 14. Conclusion & Next Steps

You now understand the mechanics of all three linked list variants and the crucial insight that makes doubly linked lists powerful: when you hold a direct node reference, deletion is O(1). The LRU Cache is not just an academic exercise — it is the pattern behind Python's `functools.lru_cache`, CPU instruction caches, and database buffer pools.

The next time you see a system that needs bounded in-memory caching with O(1) access and O(1) eviction, you will know exactly what to build.

**Next in this series:** Article 8 dives into Trees — Binary Tree, BST, and Heap. You will build a priority task scheduler using `heapq` that processes tasks by priority level, and validate BST properties with recursive traversal.

---

*Found this useful? Subscribe to the newsletter for weekly deep dives into Python, AI engineering, and system design — straight to your inbox, no fluff.*
