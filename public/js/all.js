"use strict";

var app = new Vue({
  el: '#app',
  data: {
    todos: [],
    inputTodo: '',
    currentLabel: 'all',
    cacheTodo: {},
    cacheTitle: ''
  },
  mounted: function mounted() {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  },
  watch: {
    todos: {
      handler: function handler(newTodos) {
        var parsed = JSON.stringify(newTodos);
        localStorage.setItem('todos', parsed);
      },
      deep: true
    }
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
    removeTodo: function removeTodo(item) {
      // 當findIndex執行的函式內的return的條件達成，會回傳第一個達成條件的index值
      var newIndex = this.todos.findIndex(function (obj) {
        return obj.id == item.id;
      });
      this.todos.splice(newIndex, 1);
    },
    editTodo: function editTodo(item) {
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
    cancelTodo: function cancelTodo() {
      this.cacheTodo = {};
      this.cacheTitle = '';
    },
    doneTodo: function doneTodo(item) {
      item.title = this.cacheTitle;
      this.cacheTitle = '';
      this.cacheTodo = {};
    },
    labelChange: function labelChange(label) {
      this.currentLabel = label;
      this.cacheTitle = '';
      this.cacheTodo = {};
    },
    clearTodos: function clearTodos() {
      var feedback = confirm('確定要刪除全部任務嗎?');

      if (feedback) {
        this.todos = [];
      } else {
        return;
      }
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
