export default class Model {
  constructor() {
    this.projects = [];
    this.tasks = [
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

  addToTasks = (obj) => {
    const task = {
      id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
      project: obj.project,
      completed: false,
      title: obj.title,
      content: obj.content,
      dueDate: obj.dueDate,
      priority: obj.priority,
    };
    this.tasks.push(task);
    console.log(this.tasks);
  };

  editTask = (id, title, content, priority) => {
    const task = this.tasks.find((task) => task.id === id);
    task.title = title ? title : task.title;
    task.content = content ? content : task.content;
    task.priority = priority ? priority : task.priority;
  };

  removeFromTasks = (id) => {
    this.tasks = this.tasks.filter((task) => task.id != id);
  };

  updateTaskIDs = () => {
    for (let task of this.tasks) {
      task.id = task.id - 1;
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
    const note = this.notes.find((note) => note.id === id);
    note.title = title ? title : note.title;
    note.content = content ? content : note.content;
  };

  removeFromNotes = (id) => {
    this.notes = this.notes.filter((note) => note.id != id);
  };

  updateNoteIDs = () => {
    for (let note of notes) {
      note.id = note.id - 1;
    }
  };
}
