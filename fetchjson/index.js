"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
// interface in ts are used to define the structure of an object
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, completed, title);
});
var logTodo = function (id, title, completed) {
    console.log("\n  The Todo with ID: " + id + "\n  Has a tilte of: " + title + "\n  Is it completed? " + completed + "  \n  ");
};
