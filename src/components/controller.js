import { pubsub } from "../index.js";

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addToTasks = (task) => {
    pubsub.publish("addTask", task);
  };

  renderTask = (task) => {
    pubsub.publish("renderTask", task);
  };

  editTask = (id, title, content, priority) => {
    pubsub.publish("editTask", id, title, content, priority);
  };

  removeTask = (id) => {
    pubsub.publish("removeTask", id);
  };

  updateTaskIDs = () => {
    pubsub.publish("updateTaskIDs");
  };

  createNote = (note) => {
    pubsub.publish("createNote", note);
  };

  editNote = (id, title, content) => {
    pubsub.publish("editNote", id, title, content);
  };

  removeNote = (id) => {
    pubsub.publish("removeNote", id);
  };

  updateNoteIDs = () => {
    pubsub.publish("updateNoteIDs");
  };

  renderTaskModal = (modal) => {
    pubsub.publish("renderTaskModal", modal);
  };

  removeTaskModal = (modal) => {
    pubsub.publish("removeTaskModal", modal);
  };
}
