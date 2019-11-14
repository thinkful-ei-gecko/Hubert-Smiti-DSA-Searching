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
const BinaryTree = require('./binarysearch')

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

//Iterative Solution
function deweySearch(books, dewey, title){
    const keys = Object.keys(books[1]);
    //console.log(keys);
    books.forEach(book => {
        if(book[keys[1]] === dewey && book[keys[2]] === title){
        } 
    });
}
deweySearch(books, '005.133', 'The REXX Language');

//Recursive Binary Search Solution
function recursiveDewey(books, dewey, title) {
    let start = 0;
    let end = books.length;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if(books[mid].dewey === dewey) {
            if(books[mid].title === title) {
                return books[mid]
            }
            for(let i=mid + 1; books[i].dewey === dewey; i++) {
                if(books[i].title === title) {
                    return books[i]
                }
            }
            for(let i=mid - 1; books[i].dewey === dewey; i--) {
                if(books[i].title === title) {
                    return books[i]
                }
            }
            return null;
        }
        if(books[mid].dewey < dewey) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return null;
}
recursiveDewey(books, '005.133', 'The REXX Language');

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

function best_profit(prices) {
    if (!prices.length) return 0;

    var buy = prices[0], sell = prices[0], profit = 0;
    for (var i = 1; i < prices.length; ++i) {
        sell = prices[i];
        if (sell < buy) buy = sell;
        if (sell - buy > profit) profit = sell - buy;
    }
    return profit;
}


function main(){
    let data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
    let BST = new BinaryTree();

    for (let i=0; i<data.length; i++) {
        BST.insert(data[i], data[i])
    }

    console.log(BST.inOrder());
    BST.preOrder();
    BST.postOrder();
    //console.log(BST);

    let prices = [128, 97, 121, 123, 98, 97, 105]
    best_profit(prices);
}
main();

