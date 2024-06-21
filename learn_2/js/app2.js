Vue.createApp({
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Внесите вашу заметку',
      inputValue: '',
    }
  },
  // Методы приложения
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    }, // Название метода
  },
}).mount('#app2')
