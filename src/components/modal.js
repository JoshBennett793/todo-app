import { HTMLElement } from "./view.js";
import { controller } from "../index.js";
import { format } from "date-fns";

export class taskModal {
  constructor() {
    const modalContainer = new HTMLElement(
      "div",
      null,
      null,
      "task-modal-container"
    );

    const taskForm = new HTMLElement("form", null, null, "task-form");
    modalContainer.appendChild(taskForm);

    const inputContainer = new HTMLElement(
      "div",
      null,
      null,
      "task-input-container"
    );
    taskForm.appendChild(inputContainer);

    const taskTitleInput = new HTMLElement(
      "input",
      "text",
      "task-title",
      "task-title-input"
    );
    taskTitleInput.placeholder = "e.g., Go grocery shopping";
    taskTitleInput.required = true;
    inputContainer.appendChild(taskTitleInput);

    const taskDescInput = new HTMLElement(
      "textarea",
      null,
      "task-description",
      "task-description-input"
    );
    taskDescInput.placeholder = "Description";
    taskDescInput.required = true;
    taskDescInput.setAttribute("maxlength", "140");
    inputContainer.appendChild(taskDescInput);

    const dueDateContainer = new HTMLElement(
      "div",
      null,
      null,
      "due-date-container"
    );
    taskForm.appendChild(dueDateContainer);

    const dueDate = new HTMLElement(
      "input",
      "text",
      "due-date",
      "date-input",
      "date-text-input"
    );
    dueDate.placeholder = "Due Date";
    dueDate.onfocus = () => {
      dueDate.type = "date";
      dueDate.classList.add("date-input");
      dueDate.classList.remove("date-text-input");
    };
    dueDate.onblur = () => {
      dueDate.type = "text";
      dueDate.classList.remove("date-input");
      dueDate.classList.add("date-text-input");
    };
    dueDate.min = format(new Date(), "y-M-d");
    dueDateContainer.appendChild(dueDate);

    const priorityFlagSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    priorityFlagSVG.setAttribute("width", "20");
    priorityFlagSVG.setAttribute("height", "20");
    priorityFlagSVG.setAttribute("viewBox", "0 0 24 24");
    priorityFlagSVG.setAttribute("fill", "none");
    priorityFlagSVG.setAttribute("stroke", "currentColor");
    priorityFlagSVG.setAttribute("stroke-width", "1.5");
    priorityFlagSVG.setAttribute("stroke-linecap", "round");
    priorityFlagSVG.setAttribute("stroke-linejoin", "round");
    priorityFlagSVG.setAttribute("class", "feather feather-flag");

    path.setAttribute(
      "d",
      "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
    );

    line.setAttribute("x1", "4");
    line.setAttribute("y1", "22");
    line.setAttribute("x2", "4");
    line.setAttribute("y2", "15");

    priorityFlagSVG.appendChild(path);
    priorityFlagSVG.appendChild(line);

    const bottomContainer = new HTMLElement(
      "div",
      null,
      null,
      "task-modal-bottom-container"
    );

    const priorityStatus = new HTMLElement(
      "span",
      null,
      null,
      "priority-status"
    );
    priorityStatus.textContent = "Priority 4";

    bottomContainer.appendChild(priorityFlagSVG);
    bottomContainer.appendChild(priorityStatus);

    const cancelBtn = new HTMLElement(
      "button",
      null,
      null,
      "cancel-btn",
      null,
      "Cancel"
    );
    bottomContainer.appendChild(cancelBtn);

    const addBtn = new HTMLElement(
      "button",
      "button",
      null,
      "add-btn",
      null,
      "Add Task"
    );
    bottomContainer.appendChild(addBtn);

    taskForm.appendChild(bottomContainer);

    priorityFlagSVG.onclick = () => {
      switch (priorityStatus.textContent) {
        case "Priority 4":
          priorityStatus.textContent = "Priority 3";
          priorityFlagSVG.setAttribute("stroke", "blue");
          priorityFlagSVG.setAttribute("fill", "blue");
          break;
        case "Priority 3":
          priorityStatus.textContent = "Priority 2";
          priorityFlagSVG.setAttribute("stroke", "orange");
          priorityFlagSVG.setAttribute("fill", "orange");
          break;
        case "Priority 2":
          priorityStatus.textContent = "Priority 1";
          priorityFlagSVG.setAttribute("stroke", "red");
          priorityFlagSVG.setAttribute("fill", "red");
          break;
        case "Priority 1":
          priorityStatus.textContent = "Priority 4";
          priorityFlagSVG.setAttribute("stroke", "currentColor");
          priorityFlagSVG.setAttribute("fill", "none");
      }
    };

    cancelBtn.addEventListener("click", (e) => {
      controller.removeTaskModal(e.target.closest("#task-modal-container"));
    });

    addBtn.addEventListener("click", (e) => {
      const task = {
        title: taskTitleInput.value,
        content: taskDescInput.value,
        dueDate: dueDate.value,
        priority: priorityStatus.textContent,
      };
      controller.addToTasks(task);
      controller.removeTaskModal(e.target.closest("#task-modal-container"));
      controller.renderTask(task);
    });

    return modalContainer;
  }
}
