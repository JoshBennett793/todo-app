import { taskModal } from "./modal.js";
import { controller } from "../index.js";
import { RenderedTask } from "./task.js";

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

export class View {
  renderTaskModal(modal) {
    document.body.appendChild(modal);
  }

  removeTaskModal(modal) {
    document.body.removeChild(modal);
  }

  renderTask(task) {
    taskContainer.appendChild(new RenderedTask(task));
  }
}

const addTaskBtn = document.querySelector("#add-task-btn");

addTaskBtn.onclick = () => {
	controller.toggleAddTaskBtn();
  const task = new taskModal();
  controller.renderTaskModal(task);
};

const nav = document.querySelector("#project-navbar");
const showHideBtn = document.querySelector("#navbar-toggle");


// showHideBtn.addEventListener("click", (e) => {

//   e.preventDefault();
// });

