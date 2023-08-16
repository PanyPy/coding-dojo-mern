Set Theory
This chapter we dive further into Set Theory. Put yourself into the mindset of a technical interview during this chapter’s algorithm challenges, using the following concepts:
- merger 
- union 
- intersection 
- set / multiset
- ordered / unordered 
- in-place 
- stable 
- subset
- If needed, refer to previous “Union Unsorted Arrays” solution for starting points to these challenges:


Union Unsorted Arrays (in-place)
Put union multiset of two unsorted arrays into the first. Given ([2,7,2,1],[6,7,2,6]), change the first to include (in any order) the elements [2,7,2,1,6,6].

Union Unsorted Arrays (no duplicates)
Return the union set (remove any duplicates) of two unsorted arrays. Given ([2,7,2,1], [6,7,2,6]), return (in any order) [2,7,1,6].

Subset Sorted Arrays
Given two sorted arrays, return a boolean whether the second is a subset of the first. Can you use their sorted nature to your advantage?

Subset Unsorted Arrays
Given two unsorted arrays, return whether second is the subset of first. Solve in O(N) runtime.
Second: can you solve this in-place? How does this affect your runtime performance?

Set Theory Recap
We explored Set Theory, including Sets vs. Multisets, Ordered vs. Unordered, and set operations such as Merge, Union, Intersection, and Subset. Along the way, we discovered universal principles, such as:
 - Ordered sets should be managed by iterating them concurrently, matching up values.
 - Unordered sets can be managed with associative arrays, where set members become keys, and values are booleans (for an Unordered Set) or counts (for an Unordered Multiset).
 - Looking for a break from Unions and intersections? Here’s something completely different.

My Very Own Square Root
Write your own square root function. You may not use math functions or operators except for *, the built-in multiplier. Given an integer, you should return an integer.
Second: accept and return floating-point numbers, accurate to two decimal places.