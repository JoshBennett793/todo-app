import Pubsub from "./components/pubsub.js";
import Model from "./components/model.js";
import View from "./components/view.js";
import Controller from "./components/controller.js";

const pubsub = new Pubsub();

class Todo {
  constructor(project, title, content, dueDate, priority) {
    this.project = project;
    this.title = title;
    this.content = content;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

const controller = new Controller(new Model(), new View());

pubsub.subscribe("createTodo", controller.model.addToTodos);
pubsub.subscribe("editTodo", controller.model.editTodo);
pubsub.subscribe("removeTodo", controller.model.removeFromTodos);
pubsub.subscribe("updateTodoIDs", controller.model.updateTodoIDs);
pubsub.subscribe("createNote", controller.model.addToNotes);
pubsub.subscribe("editNote", controller.model.editNote);
pubsub.subscribe("removeNote", controller.model.removeNote);
pubsub.subscribe("updateNoteIDs", controller.model.updateNoteIDs);

const note1 = new Note("New Note", "My first note");

const obj1 = new Todo(
  "work",
  "Get work done",
  "Have to do it by 10pm",
  "10/15/2022",
  "medium"
);

controller.createTodo(obj1);
controller.editTodo(3, "Edited title");
controller.createNote(note1);

console.log(controller.model.notes);
console.log(controller.model.todos);

export { pubsub };