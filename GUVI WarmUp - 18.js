/* Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’. */

function getNthElement(array, n) {
	///Your code Starts here 
	
	// Check if the array is empty or if the index is out of bounds
	if (array.length === 0 || n < 0 || n >= array.length) {
		return undefined;
	}
	// Return the element at the given index
	return array[n];
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getNthElement([1, 3, 5], 1);
getNthElement([1, 3, 5], 2);
getNthElement([], 2);
*/