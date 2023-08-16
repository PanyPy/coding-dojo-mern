MinHeap
Build the following methods in a new class called a MinHeap:

Heap: Constructor. Create a MinHeap constructor function.
Heap: Size. Return the number of values in the MinHeap.
Heap: Contains. Return whether a given val is within the heap.
Heap: Is Empty. Return whether the heap is empty.
Heap: Top. Return (not remove) the heap’s minimum value.
Heap: Insert. Add the given value to our heap.  

To Do 5
Heap: Extract. Create a MinHeap method that removes the heap’s minimum value and returns it.
Heap: Heapify Array. Create a heap method that accepts an array as its own, and turns it into a rule-abiding MinHeap.
Heap Sort. Lance discovers with glee that if one heapifies an unsorted array, then extracts values, the array is sorted in O(NlogN) time – as fast as quick sort or merge sort, the usual winners in generalized sorting! He views this as solid proof that the Heap truly is “the crown prince of data structures.” Write a standalone function heapSort(arr) that accepts an unsorted array and uses a heap to sort it.
Second: do this in-place without creating a second array. 
