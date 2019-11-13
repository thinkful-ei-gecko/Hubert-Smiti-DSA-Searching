/*
Drill #1

1 - Divides the array in half, with 11 being the mid-point value. Because our search value is less than the mid-point, we ignore all numbers greater than 12
[3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
midpoint = 11

2 - We divide the array further in half, and 6 now becomes the mid-point, and the recursive function will continue to be called until the item is greater than the value.
The starting index will continue to shift forward until the value is found
[3, 5, 6, 8, 11]

3 - Because 6 > 8, we divide the array in half again, and 8 becomes the mid-point, which is also
our search value. So the search algorithm stops.
[6, 8, 11]

When given the value of 16 to be searched, the function calculated the midpoint (11), and because the value is greater than the midpoint, the end index will continue to
shift left until the value is found. Because the value does not exist in the array, the function will return a value of -1.
*/ 
