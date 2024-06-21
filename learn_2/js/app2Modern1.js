Vue.createApp({
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Внесите вашу заметку',
      inputValue: '',
      notes: ['Сахар', 'Мука', 'Молоко'],
    }
  },
  // Методы приложения
  methods: {
    // Название метода
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    }, // Название метода
    addNewNote() {
      this.notes.push(this.inputValue)
      this.inputValue = ''
    },
    delNote(index) {
      this.notes.splice(index, 1) // удаление элемента
    },
    // inputKeyPress(event) {
    //   if (event.key === 'Enter') this.addNewNote()
    //   console.log(event.key)
    // },
  },
}).mount('#app2')
