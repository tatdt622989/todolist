"use strict";

// Vue.component('list-component', {
//   data: function() {
//     return{
//       listData: '你好'
//     }
//   },
//   template: 
//   `
//     <input type="checkbox" name="list" id="list">
//     <label for="list"></label>
//   `
// });
var app = new Vue({
  el: '#app',
  data: {
    todos: [],
    inputTodo: '',
    currentLabel: 'all',
    cacheTodo: [],
    cahgeTitle: ''
  },
  methods: {
    addTodo: function addTodo() {
      var str = this.inputTodo.trim(); //Date.now()方法回傳自 1970/01/01 00:00:00 UTC 起經過的毫秒數。

      var timestamp = Date.now();

      if (str == '') {
        return;
      }

      ;
      this.todos.push({
        id: timestamp,
        title: str,
        completed: false
      });
      this.inputTodo = '';
    },
    removeTodo: function removeTodo(index) {
      console.log(index);
      this.todos.splice(index, 1);
    },
    editTodo: function editTodo(item) {
      cacheTodo = item;
      cacheTitle = itme.title;
    }
  },
  computed: {
    filteredTodos: function filteredTodos() {
      var newTodos = [];

      if (this.currentLabel == 'all') {
        return this.todos;
      } else if (this.currentLabel == 'processing') {
        this.todos.forEach(function (obj) {
          if (!obj.completed) {
            newTodos.push(obj);
          }
        });
      } else if (this.currentLabel == 'completed') {
        this.todos.forEach(function (obj) {
          if (obj.completed) {
            newTodos.push(obj);
          }
        });
      }

      return newTodos;
    },
    processingTodo: function processingTodo() {
      var newTodos = [];
      this.todos.forEach(function (obj) {
        if (!obj.completed) {
          newTodos.push(obj);
        }
      });
      return newTodos.length;
    }
  }
});
//# sourceMappingURL=all.js.map
