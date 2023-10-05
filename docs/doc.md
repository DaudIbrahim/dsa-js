# Data Structures and Algorithms

*The goal of programming is to create solutions, not to type on a keyboard. Generating a solution that is both legitimate and machine-readable, and then effectively handing that solution, the set of instructions, to the computer to process. In essence, the machine runs the computation on your given solution, and you are responsible for checking the accuracy of your solution. I could go on about this indefinitely, but you get the idea. You create the solutions, and the computer computes them. This is when proofs enter the picture to demonstrate the correctness of a particular algorithmic formula.*

- Adopt the mindset of *Think First; Code Second*

- Grow a core competency in *Translating Abstraction into Concreteness*

- Visualizing: Creating your problems first on a whiteboard, and then being able to translate abstraction into concreteness.

  - [Data Structure Visualizations](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)

  - [VisuAlgo](https://visualgo.net/en)

## PSET

Problem Set

### Problem Solving `Goal`

[The Focus Time](https://www.youtube.com/watch?v=zvrleanEYOw&t=37s "Grant Sanderson") that you are spending should be on solving specific problems. Try to push yourself to solve more problems than you naturally would.

### Learning Problems `Approach`

It is more important to be able to [recognize a problem](https://qr.ae/priZWZ "John Byrd"), than to Memorize an algorithm that solves it.

- Learn/Recogize Problems
- Identify Patterns
- Create Solutions

## Strcuture & Elements & Operations

Mix and Match

- Operations Manipulating the Strcuture (2D Array Example)

  - Create | Create the 2D Data Structure
  - Traversal | Traverse the 2D Data Structure
  - [Merge](https://www.adservio.fr/post/data-structure-types-operations)
  - Copy

- Operations Manipulating the Data (Elements) - [Common Data Structure Operations](https://www.bigocheatsheet.com/ 'bigocheatsheet') - (Hook DB-ACID | ASID)

  - Access
  - Search
  - Insertion
  - Deletion

### Nature of the Scientific Process

Problem sets are great ways to provide students with the practice necessary to gain mastery of new skills that you have introduced in class. Problem sets are also great at reflecting the nature of the [scientific process](https://bokcenter.harvard.edu/problem-sets "Harvard University"), which so often involves problem solving, and in so doing help reinforce the explanatory power of your discipline.

## Recursion

### Refer to the three key ideas that you have worked on before

1. Mathematical Induction
2. Recursive Leap of faith - Towers of Hanoi
3. Fibonacci Sequenct - Rcursion & Memoization

### Memorize Recursion Concepts

1. *Case*
    - Base Case
    - Inductive Case

2. *Function Properties. Every function has the following:*

    - Return Address - rA
    - Return Value- rV
    - Argument - A

    **Functions return: Sometimes you overlook this, in recursion we call functions recursively. Memorize the fact that a function always returns, regardless of whether it returns a void or a value. In a recursive manner you build up the stack with function call - you hit a base and the functions start to return, effectively emptying the call stack by popping of each function.**

3. *Recursion: Actions*

    - Pre - performing some Action before recursion
    - Recursion - the recursion call
    - Post - performing some Action after the recursion call

  Similar example you can think of traversing a tree by Pre-Order, In-Order, Post-Order

```js
// You're gonna really want to understand this. Is that recursion can actually be broken down or the recurse can actually be broke down into three steps, all right? So the recurse thing can be into three steps. You have a pre, which means you can do something before you recurse.

// In our case this was literally n+, right? We took n and we added it and then we did the recursion part. So this is kind of a pre thing. Now then, we recurse, which actually does the calling of the function, right? And then there's actually an availability for some sort of post operation.

// Does that make sort of sense? We can do something else after recursing. So we didn't actually have to return here, right? We don't have to return, we could have said, hey, out equals this, then console logged something, and then returned out, right? Which would have actually, let's say we console logged, ley's just say we, here I'll just break the word log.

// - [theprimeagen recursion](https://theprimeagen.github.io/fem-algos/lessons/recursion/recursion)
```

- [Pre Operation - Recursion - Post Operation Example in Code - MazeSolver](../kata-machine//src//day1/MazeSolver.ts)

## [Mathematical Induction & Recursion (Relationship)](https://stackoverflow.com/a/11143870/7031530 "stackoverflow")

### Sequence

You Start with a Sequence.

You identify a pattern that seems to hold true for every term in the Sequence.

Make use of Mathematical Induction to prove that the pattern holds true for every term down the Sequence.

### Method of Proof by Mathematical Induction

    - Step 1. Basis Step.
        Show that P(a) is true. Pattern that seems to hold true from a.

    - Step 2. Inductive Step
        For every integer k >= a
            If P(k) is true then P(k+1) is true.
                To perform this Inductive step you make the Inductive Hypothesis. (P(k) is true)
                Supposition: that P(k) is true, where k is any particular, but arbitrarily chosen integer with k >= a.
                Inductive Hypothesis is the supposition that P(k) is true
            Show that P(k + 1) is true
                Notice: a, a+1, a+2, a+3, ... k, k+1
                            for every integer k >= a, that p(k) is true

### Recursion (Mathematical)

    Start with Sequence: Each term has a recurrence relation with the previous term.

    A recurrence relation is an equation that defines each later terms of a Sequence by reference to earlier terms in the Sequence
            Now you have a Sequence at hand and for defining the nth term of the Sequence you refer (nth - 1), (nth -2) ...
    Initial Condition
        An Initial Term that is defined (returns a value)
            As previously mentioned for defining the nth term of the Sequence you refer (nth - 1), (nth -2) ... an so forth until reaching the initial term that starts solving the problem for defining the nth term of the Sequence
                Notice: n, n-1, n-2, n-3, ... Initial Term

### Recursive Specification

    Recursive Relation
    Initial Values

### Combine

    - Sequence.
    - Recursive Specification: Recurrence Ralation & Initial Condition.
    - Explicit Formula: Solution to the Recurrence Ralation.
    - Correctedness of the formula proven by Mathematical Induction.

### [Recursive Leap of Faith](https://www.youtube.com/watch?v=rf6uf3jNjbo&t=620s)

The most difficult part of solving problems recursively is to figure out how knowing the solution to the smaller problems of the same type as the orignal problem will give you a solution to the problem as a whole.

You suppose you knwo the solutions to the smaller subproblems, the supposition that the smaller subproblems have already been solved has been called the Recursive Leap of Faith.

The Recursive Leap of Faith is similar to the inductive hypothesis in a proof by mathematical induction.

### Relationship between Mathematical Induction & Recursion?

- Sequence

  - Think in terms of the following:

         Sequence, Pattern & Terms.

         Both Mathematical Induction & Recursion deal with these.

- Direction

  - Mathematical Induction

         `a, (a+1), (a+2), (a+3), ... k, (k+1)`

         Start from base term `a` and prove that for `k >= a`, every subsequent `k + 1` is true

  - Recursion

         `k, (k-1), (k-2), (k-3), ... k, a`

         Define the `kth term`.
         `k` refers to earlier terms in the sequence `(k-1)`, `(k-2)` preceding and so forth arriving at the initlal term `a`

    - Extra: Approx - ∞
      - Mathematical Induction: Base to ∞
      - Recursion ∞ to Initial Terms

- Supposition

  - Both Inductive Hypothesis & Recursive Leap of Faith deal with a Supposition; a Hypothesis.

        Mathematical Induction: Inductive Hypothesis is the supposition that P(k) is true; where k is any particular, but arbitrarily chosen integer with k >= a.
        Recursion: Recursive Leap of Faith is the supposition that the smaller subproblems have already been solved.

- Correctedness of the Explicit Formula proven by Mathematical Induction

    You use mathematical induction to check the correctness of your formula

#### Reference

- [Discrete Mathematics with Applications](https://www.amazon.com/dp/1337694193/ "Susanna S. Epp")

- [My Answer on stackoverflow](https://stackoverflow.com/a/75788144/7031530)

## Big O Notation

 **Big O Notation** - [Big O tells you how it an algorithm scales with respect to its input size](https://www.youtube.com/watch?v=7VHG6Y2QmtM&lc=UgwAxy3T3INAexROKJR4AaABAg)

[Big O Cheat Sheet](https://www.bigocheatsheet.com/)

- [Important concepts](https://theprimeagen.github.io/fem-algos/lessons/algorithms-and-time-space-complexity/time-and-space-complexity)
  - Growth is with respect to the input
  - Constants are dropped
  - Worst case is usually the way we measure

- Cases
  - Best Case - Big Omega
  - Average Case - Big Theta
  - Worst Case - Big O

TODO - Read - [Big-O notation explained by a self-taught programmer](https://justin.abrah.ms/computer-science/big-o-notation-explained.html)

Math

- Sets
- Functions
- [Logarithms](https://youtu.be/ntBWrcbAhaY?t=180)
- Big O Notation

## Array

Random Access with an ArrayList. Example - Give me index three.

One key difference that with purely Arrays you essentually define a size aka a container

- In array operations `insert` and `write` mean two different things

  - Example An array of size 3 capacity

    - At index 2 `write` value dummy-value. This is a write opration, writing at index 2

    - At index 3 `write` value duumy-data-2

      - Now observe that within an array with of capacity of three items you are writing data that exceeds the capacoty to 4 items

        - & behold the Array has to grow in size which is the `insert` operation

        - Ability to Grow

          - Create a new array with increased capacity
          - Copy existing items
          - Write the new item at index 4

Arrays are not a built-in data structure, and therefore need to be imported via the array module in order to be used.

### Linear Data Structures

[Structures can be broken down into two main categories, linear and nonlinear.](https://www.adservio.fr/post/data-structure-types-operations)

Main Linear Data Structures:

- Arrays

### Ueful Array Reference

- [1D Array using Python Module: Array](https://docs.python.org/3/library/array.html#module-array)

- [2D Arrays using Numpy](https://numpy.org/doc/stable/user/basics.creation.html)

- [Python Array vs List](https://learnpython.com/blog/python-array-vs-list/)

- [Python List VS Array VS Tuple](https://www.geeksforgeeks.org/python-list-vs-array-vs-tuple/)

Low level Array access = (a + width * offset)

## Python Lists

In Python, lists are implemented as dynamic arrays. The memory allocation for a dynamic array is different from that of a static array. When a dynamic array is created, it allocates a fixed amount of memory initially. As elements are added to the list, the dynamic array checks if it has enough capacity to store the new elements. If not, it reallocates a larger block of memory and copies the elements from the old block to the new one.

The size of the new block is typically a multiple of the old block's size (usually around 1.125 times, but this can vary depending on the implementation). This allows for amortized constant-time complexity for append operations.

When altering a dynamic array in Python, such as adding or removing elements, it does not always create a new array. If the current array has enough capacity to accommodate the changes, the operations are performed in-place without creating a new array.

However, if the dynamic array needs to be resized due to the change (either because it needs more capacity to store additional elements or because it can free up some memory by using a smaller block), a new array will be created, and the contents of the old array will be copied to the new one.

## Linked List

**Every single LinkedList is essentially a graph. Every single LinkedList is technically a tree.**

- Understand conceptually and implement with caution (easy to make mistake in implementation)

- Very Important as `Graphs and Trees` underneath use the very similar pointer mechanism of that of `Linked List`

### Singly Linked List

In a singly linked list, each node contains a data element and a reference (or link) to the next node in the sequence. Traversal can only be done in one direction, starting from the head and following the next pointers until reaching the tail. It is the simplest and most common type of linked list.

### Doubly Linked List

In a doubly linked list, each node has references to both the next node and the previous node in the sequence. This allows for traversal in both forward and backward directions. The additional previous pointers provide more flexibility but require extra memory to store.

### Circular Linked List

A circular singly linked list is a linked list where the last node points back to the first node, forming a closed loop.

In a circular linked list, the tail node's next reference points back to the head, forming a loop. This means there is no end or null reference, and the list can be traversed indefinitely. Circular linked lists are useful in scenarios where cyclic behavior or continuous looping is required.

### Doubly Circular Linked List

This type of linked list combines the features of a doubly linked list and a circular linked list. Each node has references to both the next and previous nodes, and the tail node's next reference points back to the head. This creates a circular loop that can be traversed in both directions.

### Linked List More

      Succeeding Node & Preceding node

## Stack

- *Stack - DFS - LIFO - ⬇*

## Queue

- *Queue - BFS - FIFO - ➡*

## Search

### Binary Search

Midpoint - find the midpoint

Index: *Offset by One* | *Memorize*

- *Establish the mental model of having your index off by 1's | inclusive/exclusive [low, hight) range(0, 5)*

A note on Set Theory

- Closed Interval

  - [a, b] - a & b both are included in the interval

- Half-open Interval

  - [a, b) - a is included & b is not, b is excluded from the interval

    Half Interval Python Example

    ```py
    for i in range(0, 5):
      print(i) # 0, 1, 2, 3, 4, 5
    ```

## Sort

### Quick Sort

- Divide & Conquer

  - Partition the array into two parts, partition one to the left and other to the right

    - There are more than one ways to pivotPartition

      - I am using the approach from [VisuAlgo NUS](https://visualgo.net/en/sorting)

        - Memorize the approach from [VisuAlgo NUS](https://visualgo.net/en/sorting) to solve for pivotPartition

          - **< Pivot <=**

          - **The pivotPartition Transforms [5, 1, 10, 3, 7] into [< Pivot <=]**

## [Graph Theory Quintessential](https://youtube.com/playlist?list=PLpXOY-RxVRTPPVLBP6-sz6CMWxhtrI-v_)

- Intro
- Depth First
- Breadth First
- The Traveling Salesman Problem

## Traversal & Search

Graphs are a more general data structure that can include trees as a special case.

Traversal and Search are two fundamental operations used in working with graphs and trees.

The key conceptual difference between traversal and search lies in their primary objectives and how they navigate the tree structure. Traversal aims to visit all nodes in a systematic way, while search aims to find a specific node or satisfy a particular condition efficiently. The choice between traversal and search depends on the problem you're trying to solve with the tree or graph data structure.

- **Search**:

  - **Purpose**: Search involves finding a specific node or element within a tree or graph, often with a particular goal or criteria in mind. The objective is to locate a target node efficiently. [The algorithms in this class are Depth First Search (DFS), Breadth First Search (BFS), and Dijkstra’s algorithm. If you have additional time, I recommend you learn the A* algorithm as well.](https://levelup.gitconnected.com/must-know-algorithms-for-coding-interviews-937d807064e0#:~:text=The%20algorithms%20in%20this%20class%20are%20Depth%20First%20Search%20(DFS)%2C%20Breadth%20First%20Search%20(BFS)%2C%20and%20Dijkstra%E2%80%99s%20algorithm.%20If%20you%20have%20additional%20time%2C%20I%20recommend%20you%20learn%20the%20A*%20algorithm%20as%20well.)

  - **Types**: Here are two common types of tree search:

    - **Breadth-First Search (BFS)**: BFS starts at the root node and explores all neighbor nodes at the current depth level before moving on to nodes at the next depth level. It's typically used for finding the shortest path or for exploring all possible paths in an unweighted graph.

      - **Exploration Strategy**: BFS explores a graph by visiting all neighbors of a node before moving on to their children. It explores nodes at the current depth level before proceeding to nodes at the next depth level.

      - **Data Structure**: BFS uses a queue data structure to keep track of nodes to visit. Nodes are enqueued (added to the back of the queue) when they are discovered and dequeued (removed from the front of the queue) when they are visited.

      - **Use Cases**:
        - Finding the shortest path in an unweighted graph: Since BFS explores nodes level by level, the first time you encounter the target node, you can be sure that it is the shortest path.
        - Exploring all possible paths from a source node to a target node.
        - Discovering connected components in an unweighted graph.

      - **Completeness**: BFS is complete, meaning it will find a target node if it exists, provided the graph is connected.

    - **Depth-First Search (DFS)**: DFS explores as far as possible along a branch before backtracking. It can be implemented using recursion or a stack data structure. DFS is often used for tasks like checking if a path exists between two nodes or for topological sorting. **Depth-First preserves the shape of the traversal**

      - **Exploration Strategy**: DFS explores a graph by following a single branch as deeply as possible before backtracking. It explores one branch entirely before moving on to the next sibling branch.

      - **Data Structure**: DFS can be implemented using either recursion or a stack data structure. In a recursive DFS, each recursive call explores a node's children.

      - **Use Cases**:
        - Determining whether a path exists between two nodes.
        - Topological sorting: Ordering nodes in a directed acyclic graph (DAG) such that for every directed edge (u, v), node u comes before node v in the ordering.
        - Finding cycles in a graph.
        - Generating all possible solutions in problems like maze-solving or the N-Queens problem.

      - **Completeness**: DFS may not be complete in all cases, especially if there are cycles in the graph. It can get stuck in an infinite loop if not carefully implemented.

  In summary, BFS explores nodes level by level, making it suitable for tasks like finding the shortest path, while DFS explores one branch deeply before backtracking, making it suitable for tasks like finding paths and detecting cycles. The choice between BFS and DFS depends on the specific problem and the characteristics of the graph being traversed or searched.

- [**Tree Traversal**](https://youtu.be/b_NjndniOqY)

  Traversal and search are two fundamental operations used in working with tree data structures, such as binary trees. In case of traversal you traverse the entire tree and for search lookup a specific value.

  **Depth First Search**: DFS is the most common way to traverse trees. There are three ways to traverse a tree using DFS: in-order traversal, pre-order traversal, and post-order traversal. Each of these implementations are DFS and explore down a path fully. The only difference is the order in which they use the current node's data.

  **Purpose**: Tree traversal is the process of visiting and examining all nodes in a tree or graph in a systematic way without any specific goal of finding a particular node. The primary objective is to visit every node once.

  **Types**: [There are three common types of tree traversal using DFS](https://rb.gy/2j225):

  There are three common types of tree traversals: preorder, inorder, and postorder. Each traversal has a different order in which it visits nodes. Let's explore each of them in more detail:

  1. **Preorder Traversal**:
      - **Order of Visitation**: In preorder traversal, you visit the current node before its children. The order is as follows:
        1. Visit the current node.
        2. Traverse the left subtree (recursively).
        3. Traverse the right subtree (recursively).
      - **Common Uses**:
        - Preorder traversal is often used for copying a tree or generating a prefix expression from an expression tree.
        - It's also useful for certain types of binary tree constructions.

  2. **Inorder Traversal**:
      - **Order of Visitation**: In inorder traversal, you visit the left child, then the current node, and finally the right child. The order is as follows:
        1. Traverse the left subtree (recursively).
        2. Visit the current node.
        3. Traverse the right subtree (recursively).
      - **Common Uses**:
        - Inorder traversal is commonly used for binary search trees (BSTs) to retrieve elements in sorted order.
        - It helps in evaluating expressions represented as binary expression trees (infix expressions).

  3. **Postorder Traversal**:
      - **Order of Visitation**: In postorder traversal, you visit the children of a node before visiting the node itself. The order is as follows:
        1. Traverse the left subtree (recursively).
        2. Traverse the right subtree (recursively).
        3. Visit the current node.
      - **Common Uses**:
        - Postorder traversal is often used for tasks like deleting a tree because it ensures that you delete child nodes before their parent nodes.
        - It can also be used for certain tree transformations and calculations.

      Here's a simple example to illustrate these traversals on a binary tree:

      ```plaintext
              A
            /   \
            B     C
          / \   / \
          D   E F   G

      Preorder Traversal: A, B, D, E, C, F, G
      Inorder Traversal: D, B, E, A, F, C, G
      Postorder Traversal: D, E, B, F, G, C, A
      ```

      The order in which nodes are visited in each traversal type is crucial for various operations involving trees, and choosing the right traversal depends on the specific problem or task you want to solve.

      [So in summary, always go from the root in counterclockwise direction around the tree.](https://www.youtube.com/watch?v=WLvU5EQVZqY&lc=UgxwHLh8RDXYgk1hHyp4AaABAg.9YEq1NFsZT09toOL6s_7fS)
      - For Pre-Order, print the nodes as you visit them for the first time.
      - For In-Order, print the nodes only when you visit them for the second time.
      - For Post-order, print the nodes when you visit them for the last time.

  **Breadth-First Search**: BFS traverses the tree by level and can also be called [level-order traversal](https://skilled.dev/course/tree-traversal-in-order-pre-order-post-order). So it will go all the way through level 1, then level 2, and follow this path until it reaches the last level. BFS is used to find the shortest path to a node.

  ```plaintext
          A
        /   \
        B     C
      / \   / \
      D   E F   G

  Level Order Traversal: A, B, C, D, E, F, G
  ```

- **Tree Traversal, Graph Traversals & Cycles**

  In *a tree traversal*, such as DFS or BFS, there is no need to maintain a separate `seen" array` or `visited list`. This is because trees are inherently acyclic structures, meaning there are no cycles or loops within the tree. When traversing a tree, whether using depth-first search (DFS) or breadth-first search (BFS), you naturally move from one node to its children or neighboring nodes. Since there are no cycles in a tree, you will not encounter the same node twice during the traversal. The absence of cycles ensures that you won't get stuck in an infinite loop while traversing a tree. Each node in a tree has a unique path to reach it from the root, so there is no need for additional checks to prevent revisiting nodes.

  However, in *a general graph traversal* (not limited to trees) where cycles are possible, maintaining a separate data structure like a `seen" array` or `visited list` is necessary to keep track of visited nodes and prevent revisiting them. This helps avoid getting stuck in cycles or infinite loops.

  [ ]
## Binary Tree

- Left Node
- Right Node

[Example of Binary Tree in Code](../kata-machine/src/__tests__/tree.ts)

## Binary Heap

Super cool data strcture that changes you perspective. [That has to do with the ability to change your perspective.](https://youtu.be/ZQElzjCsl9o?t=324)

[Heap is the data structure best suited to implement Priority Queues.](https://anmolsehgal.medium.com/heap-vs-priority-queues-vs-queues-b03398312c87#:~:text=Heap%20is%20the%20data%20structure%20best%20suited%20to%20implement%20Priority%20Queues.)

[What is a Binary Heap (Concept)](https://youtu.be/AE5I0xACpZs?si=y-Oh_rpBCfk1MT9i)

### Details

The problem that is being solved - create a queue that has an order of priority for its elements

Binary Heaps are implemented as a complete tree ("filling each level from left to right")
We are not Traversing instead accessing the parent and child by making use of indexes and mathematical formulas (pattern -> formula)

### Traversal

It is not exactly a tree traversal, rather we use mathematical formula to access left and right child; & parent from child

- Left Child

  - 2i + 1

- Right Child

  - 2i + 2

- Parent

  - (i - 1) / 2

### Operation

- Insert: Heapify Up

- Delete: Heapify Down

  - Memorize to compare children nodes before so that you heapify down to the correct node, in case of min heap, heapify down to the smaller node; this ensures that the the node with the samllest value remains at the top

## [Greedy, Divide/Conquer, Dynamic & Backtracking](https://www.youtube.com/playlist?list=PLxvbXPxg6ydxQen2-cPMyzKco1Q89JvPi)

Silly memory hook: Greatly Designed Data Base - (GDDB) in order to Memorize the following four techniques:

### Greedy

- Greedy

### Divide and Conquer

Binary Search, Quick Sort, & Binary Search Tree, share an identical Paradigm. **The Paradigm of Divide & Conquer**

- Divide & Conquer
- Split in half
- Go: Left || Right

- Binary Searh
- Quick Sort
- Binary Tree

### Dynamic

- Dynamic

### Backtracking

- Backtracking

## [Patterns for Solving Data Structures and Algorithms Problems](https://github.com/Chanda-Abdul/Several-Coding-Patterns-for-Solving-Data-Structures-and-Algorithms-Problems-during-Interviews)

### Pattern 0: Frequency Counter Pattern

### Pattern 1: Multiple Pointers by Colt Stelee

[Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition](https://cs.slides.com/colt_steele/problem-solving-patterns#/33)

Hint: useful in solving problems related to finding **Pairs**

### Pattern 2: Sliding Window

Hepls in solving *Hint* **Contiguous**

In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something among all the contiguous subarrays (or sublists) of a given size.

## Misc

### Keywords

- Refer

- Memorize

### Refer (Previously learned ideas & concepts)

- Start by fiding a solution for the smallest problem

  - Start by solving for the base case

  - Walk through the algorithm like ["Animator vs. Animation"](https://youtu.be/B1J6Ou4q8vE)

- middle-element

- offset 🌟

- nested loop

  - nested loops are to be avoided wherever and as much as possible use two pointers, sliding window, & fast and slow pointers
