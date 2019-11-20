let vm = new Vue({
  el: '.app',
  data: {
    tasks: [
      'learn Vue.js',
      'create great animation',
      'be best in css'
    ],
    newTasks: [],
  },

  computed: {
    currentDate() {
      const date = moment();

      return date;
    },
  },

  created() {
    this.tasks = this.tasks.map(item => item.split('')[0].toUpperCase() + item.slice(1));
  },

  methods: {
    addInput(arr) {
      arr.push('');
    },

    addTask(el, arr, index) {
      if (el) {
        arr.push(el.split('')[0].toUpperCase() + el.slice(1));
        this.newTasks.splice(index, 1);
      }
    },

    deleteTask(arr, index) {
      arr.splice(index, 1);
    },
  },
});
