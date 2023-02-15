import { taskModal } from "./modal.js";
import { controller } from "../index.js";
import { Task } from "./task.js";

export class HTMLElement {
  constructor(tag, type, name, id, __class, text) {
    const el = document.createElement(tag);
    if (type) {
      el.type = type;
    }
    if (name) {
      el.name = name;
    }
    if (id) {
      el.id = id;
    }
    if (__class) {
      el.className = __class;
    }
    if (text) {
      el.textContent = text;
    }
    return el;
  }
}

const taskContainer = document.querySelector("#task-container");

export default function View() {

  const renderTaskModal = (modal) => {
    document.body.appendChild(modal);
  }

	const renderEditModal= (modal) => {
		document.body.appendChild(modal);
	}

  const removeTaskModal = (modal) => {
    document.body.removeChild(modal);
  }

  const renderTask = (task) => {
    taskContainer.appendChild(new Task(task));
  }
	// TODO erase content of tasks on screen

	return {
		renderTaskModal,
		renderEditModal,
		removeTaskModal,
		renderTask,
	}
}

const addTaskBtn = document.querySelector("#add-task-btn");

addTaskBtn.onclick = () => {
	controller.toggleAddTaskBtn();
  const modal = new taskModal();
  controller.renderTaskModal(modal);
};

const nav = document.querySelector("#project-navbar");
const showHideBtn = document.querySelector("#navbar-toggle");