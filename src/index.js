import Pubsub from "./components/pubsub.js";
import Model from "./components/model.js";
import { View } from "./components/view.js";
import Controller from "./components/controller.js";

import "./css/index.css";
import "./css/modal.css";

export const pubsub = new Pubsub();

export const controller = new Controller(new Model(), new View());

pubsub.subscribe("addTask", controller.model.addToTasks);
pubsub.subscribe("renderTask", controller.view.renderTask);
pubsub.subscribe("editTask", controller.model.editTask);
pubsub.subscribe("removeTask", controller.model.removeFromTasks);
pubsub.subscribe("updateTaskIDs", controller.model.updateTaskIDs);
pubsub.subscribe("createNote", controller.model.addToNotes);
pubsub.subscribe("editNote", controller.model.editNote);
pubsub.subscribe("removeNote", controller.model.removeNote);
pubsub.subscribe("updateNoteIDs", controller.model.updateNoteIDs);
pubsub.subscribe("renderTaskModal", controller.view.renderTaskModal);
pubsub.subscribe("removeTaskModal", controller.view.removeTaskModal);