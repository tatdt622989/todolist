"use strict";var app=new Vue({el:"#app",data:{todos:[],inputTodo:""},methods:{addTodo:function(){var o=this.inputTodo.trim(),t=Date.now();""!=o&&(this.todos.push({id:t,title:o,completed:!1}),this.inputTodo="")},removeTodo:function(o){this.todos.splice(o,1)}}});
//# sourceMappingURL=all.js.map
