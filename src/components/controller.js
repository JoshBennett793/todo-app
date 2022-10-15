import { pubsub } from "../index.js";

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  createTodo = todo => {
    pubsub.publish("createTodo", todo);
  };

  editTodo = (id, title, content, priority) => {
    pubsub.publish("editTodo", id, title, content, priority);
  };

  removeTodo = id => {
    pubsub.publish("removeTodo", id);
  };

  updateTodoIDs = () => {
    pubsub.publish("updateTodoIDs");
  };

  createNote = note => {
    pubsub.publish("createNote", note);
  };

  editNote = (id, title, content) => {
    pubsub.publish("editNote", id, title, content);
  };

	removeNote = id => {
		pubsub.publish("removeNote", id);
	}

	updateNoteIDs = () => {
		pubsub.publish("updateNoteIDs");
	}

	renderTaskModal = modal => {
		pubsub.publish("renderTaskModal", modal);
	}

	removeTaskModal = modal => {
		pubsub.publish("removeTaskModal", modal);
	}
}
