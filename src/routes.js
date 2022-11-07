const { addBookHandler, 
  getBooks,
  getBooksId,
  editBookId,
  deleteBookId } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksId,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookId,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookId,
  },
];

module.exports = routes;
