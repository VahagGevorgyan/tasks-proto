"use strict";

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const Pagination = {
  book: [],
  currentPage: 0,
  init(arr, pageCount) {
    let contents = [];
    for (let i = 0; i < arr.length; i++) {
      contents.push(arr[i]);
      if (i !== 0 && (i + 1) % pageCount === 0) {
        Pagination.book.push(contents);
        contents = [];
      }
    }
    Pagination.book.push(contents);
  },
  getPageItem() {
    return Pagination.book[Pagination.currentPage];
  },
  prevPage() {
    if (Pagination.currentPage !== 0) {
      Pagination.currentPage--;
    }
    return Pagination;
  },
  nextPage() {
    if (Pagination.currentPage !== Pagination.book.length) {
      Pagination.currentPage++;
    }
    return Pagination;
  },
  firstPage() {
    return Pagination.book[0];
  },
  lastPage() {
    return Pagination.book[Pagination.book.length - 1];
  },
};
Pagination.init(alphabetArray, 4);
