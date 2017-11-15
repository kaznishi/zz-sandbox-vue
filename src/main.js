import Vue from 'vue'

// simple Hello world
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

// v-bind sample
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this-page on ' + new Date().toLocaleString()
  }
})

// v-if sample
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
})

// v-for sample
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

// v-on sample
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

// v-model sample
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

// component sample
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'vegetables'},
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'watever .......'}
    ]
  }
})