# Data Structures and Algorithms

Data Structures and Algorithms in Python

## PSET

Problem Set

### Problem Solving `Goal`

[The Focus Time](https://www.youtube.com/watch?v=zvrleanEYOw&t=37s "Grant Sanderson") that you are spending should be on solving specific problems. Try to push yourself to solve more problems than you naturally would.

### Learning Problems `Approach`

It is more important to be able to [recognize a problem](https://qr.ae/priZWZ "John Byrd"), than to remember an algorithm that solves it.

- Learn/Recogize Problems
- Identify Patterns
- Create Solutions

### Nature of the Scientific Process

Problem sets are great ways to provide students with the practice necessary to gain mastery of new skills that you have introduced in class. Problem sets are also great at reflecting the nature of the [scientific process](https://bokcenter.harvard.edu/problem-sets "Harvard University"), which so often involves problem solving, and in so doing help reinforce the explanatory power of your discipline.

## Recursion

### Relationship between Induction & Recursion?

An answer from [stackoverflow](https://stackoverflow.com/a/11143870/7031530)

#### Sequence

You Start with a Sequence.

You identify a pattern that seems to hold true for every term in the Sequence.

Make use of Mathematical Induction to prove that the pattern holds true for every term down the Sequence.

#### Method of Proof by Mathematical Induction

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

#### Recursion (Mathematical)

    Start with Sequence: Each term has a recurrence relation with the previous term.

    A recurrence relation is an equation that defines each later terms of a Sequence by reference to earlier terms in the Sequence
            Now you have a Sequence at hand and for defining the nth term of the Sequence you refer (nth - 1), (nth -2) ...
    Initial Condition
        An Initial Term that is defined (returns a value)
            As previously mentioned for defining the nth term of the Sequence you refer (nth - 1), (nth -2) ... an so forth until reaching the initial term that starts solving the problem for defining the nth term of the Sequence
                Notice: n, n-1, n-2, n-3, ... Initial Term

#### Recursive Specification

    Recursive Relation
    Initial Values

#### Combine

    - Sequence.
    - Recursive Specification: Recurrence Ralation & Initial Condition.
    - Explicit Formula: Solution to the Recurrence Ralation.
    - Correctedness of the formula proven by Mathematical Induction.

#### Recursive Leap of Faith

The most difficult part of solving problems recursively is to figure out how knowing the solution to the smaller problems of the same type as the orignal problem will give you a solution to the problem as a whole.

You suppose you knwo the solutions to the smaller subproblems, the supposition that the smaller subproblems have already been solved has been called the Recursive Leap of Faith.

The Recursive Leap of Faith is similar to the inductive hypothesis in a proof by mathematical induction.

#### Relationship between Mathematical Induction & Recursion?

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

##### Reference

- [Discrete Mathematics with Applications](https://www.amazon.com/dp/1337694193/ "Susanna S. Epp")

- [My Answer on stackoverflow](https://stackoverflow.com/a/75788144/7031530)

## Eplore

### Recursion Explore

- Tail Recursion
- Why Recursion is not always the best choice - YT
