export default class Model {
  constructor() {
    this.projects = [];
    this.todos = [
      {
        id: 1,
        project: "TOP",
        completed: false,
        title: "Project 1",
        content: "Build Model",
        dueDate: "10-13-2022",
        priority: "high",
      },
      {
        id: 2,
        project: "TOP",
        completed: false,
        title: "Project 2",
        content: "Build Controller",
        dueDate: "10-13-2022",
        priority: "high",
      },
    ];
    this.notes = [];
  }

  addToTodos = (obj) => {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      project: obj.project,
      completed: false,
      title: obj.title,
      content: obj.content,
      dueDate: obj.dueDate,
      priority: obj.priority,
    };
    this.todos.push(todo);
  };

	editTodo = (id, title, content, priority) => {
		const todo = this.todos.find((todo) => todo.id === id);
		todo.title = title ? title : todo.title;
		todo.content = content ? content : todo.content;
		todo.priority = priority ? priority : todo.priority;
	};

  removeFromTodos = (id) => {
    this.todos = this.todos.filter((todo) => todo.id != id);
  };

  updateTodoIDs = () => {
    for (let todo of this.todos) {
      todo.id = todo.id - 1;
    }
  };

  addToNotes = (obj) => {
    const note = {
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1] + 1 : 1,
      title: obj.title,
      content: obj.content,
    };
    this.notes.push(note);
  };

	editNote = (id, title, content) => {
		const note = this.notes.find(note => note.id === id);
		note.title = title ? title : todo.title;
		note.content = content ? content : todo.content;
	}

	removeFromNotes = (id) => {
		this.notes = this.notes.filter(note => note.id != id);
	}

	updateNoteIDs = () => {
		for (let note of notes) {
			note.id = note.id - 1;
		}
	}
}
