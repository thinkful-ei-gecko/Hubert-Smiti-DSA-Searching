import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: null,
      array: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62,
        93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 
        13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6,
        39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      newArray: [],
    }
  }

  linearSearch = (array, value) => {
    value = parseInt(value);
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  sortArray = (array) => {
    let newArray = array.sort((a,b) => a-b)
    this.setState({ newArray })
    console.log(newArray)
    return;
  }

  binarySearch = (newArray, value, start, end) => {
    value = parseInt(value);
    start = start === undefined ? 0 : start;
    end = end === undefined ? newArray.length : end;

    if (start > end) {
      return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = newArray[index];

    console.log(start, end);
    if (item === value) {
        return index;
    }
    else if (item < value) {
        return this.binarySearch(newArray, value, index + 1, end);
    }
    else if (item > value) {
        return this.binarySearch(newArray, value, start, index - 1);
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      search: e.target.search.value
    })
    console.log(this.linearSearch(this.state.array, e.target.search.value))
    console.log(this.binarySearch(this.state.array, e.target.search.value))
    console.log(this.sortArray(this.state.newArray))
  }

  render() {
    return (
      <div className="linear-search">
        <h1>
          Linear/Binary Search
        </h1>
        <form onSubmit={this.handleSubmit}>
          Search Value: 
          <input type="text" id="search" name="search">
          </input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}
export default Search;