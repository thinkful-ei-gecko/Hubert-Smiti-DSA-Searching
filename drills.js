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
import BinarySearchTree from './binarysearch';

let books = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

function deweySearch(books, dewey, title){
    const keys = Object.keys(books[1]);
    //console.log(keys);
    books.forEach(book => {
        //console.log(book[keys[1]] );
        if(book[keys[1]] === dewey && book[keys[2]] === title){

            //console.log(book);
        }
        
    });

  
}

deweySearch(books, '005.133', 'The REXX Language');
function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

function treeTraversals(){
    let BST = new BinarySearchTree();
    BST.insert(25, 29);
    BST.insert(15, 16);
    console.log(BST);
}

//treeTraversals();