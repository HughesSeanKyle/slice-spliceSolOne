/*
Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs

*/

//Solution One

function frankenSplice(arr1, arr2, n) {           //1
  // It's alive. It's alive!
  let localArray = arr2.slice();                  //2
  for (let i = 0; i < arr1.length; i++) {         //3
    localArray.splice(n, 0, arr1[i]);             //4
    // console.log(localArray);                   //4.1
    n++;                                          //5
    //console.log(n)                              //5.1
  }
  return localArray;                              //6
}


console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//Output           = [ 4, 1, 2, 3, 5, 6 ]
//Output if n is 2 = [ 4, 5, 1, 2, 3, 6 ]
//Output if n is 3 = [ 4, 5, 6, 1, 2, 3 ]
//Output if > arr2 = [ 4, 5, 6, 1, 2, 3 ]


//Notes
/*
//1

A function which takes in three arguments:
Arg 1: Array
Arg 2: Array
Arg 3: An Integer

//2

The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

arr.slice([begin[, end]])
Source - [https://devdocs.io/javascript/global_objects/array/slice]

let localArray = arr2.slice();

  Makes a copy of arr2 (No arguments in slice will copy the whole array) and stores it in localArray variable.

//3

For loop with three conditions:
[initialization];   = let i = 0;        - Variable where iteration starts @ 0 index
[condition];        = i < arr1.length;  - iteration is less than arr1.length = 3 (index 2)
[final-expression]  = i++               - i will incerement till condition met

//4

The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // inserts at index 1
    console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "June"]

    months.splice(4, 1, 'May');
    // replaces 1 element at index 4
    console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "May"]

Source - [https://devdocs.io/javascript/global_objects/array/splice]

arr2 ([4, 5, 6]) is being modified by the splice method
As n starts at 1 in this scenario the first value will be added after the first item in the localArray(Copy of arr2 - [4,{Entry Here}, 5, 6])
This first value to be added is 1 from the arr1 array as per the third argument of splice.
The third argument of the splice method is an iteration through each item of arr1.

//4.1
[ 4, 1, 5, 6 ]        First Iteration add 1
[ 4, 1, 2, 5, 6 ]     Second Iterarion add 2
[ 4, 1, 2, 3, 5, 6 ]  Third and final iteration add 3

Iteration condition determined by `i < arr1.length`

//5
As the Loop progresses 'n' will increment as seen in //5.1
The position for the splice methods first argument will shift two places as n is now 2
it will now add the 2 value of the arr1 after the 1 as seen in //4.1 (Second iteration)

The same steps apply to the 3rd and 4th incremetation of n

//5.1
2
3
4

//6

One the for loop has run its course the spliced array is returned 
//Output           = [ 4, 1, 2, 3, 5, 6 ]
*/

