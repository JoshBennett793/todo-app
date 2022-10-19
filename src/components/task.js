import { HTMLElement } from "./view.js";
import { format, parseISO, isPast } from "date-fns";

export class RenderedTask {
  constructor(obj) {
    const taskListItem = new HTMLElement("li", null, null, null, "list-item");
    const checkbox = new HTMLElement(
      "input",
      "checkbox",
      null,
      null,
      `checkbox-${obj.priority.replace(" ", "-").toLowerCase()}`
    );
    taskListItem.appendChild(checkbox);

    const taskTitle = new HTMLElement(
      "span",
      null,
      null,
      null,
      "task-title",
      `${obj.title}`
    );
    taskListItem.appendChild(taskTitle);

    const taskDueDate = new HTMLElement(
      "span",
      null,
      null,
      null,
      "task-due-date",
      parseISO(`${obj.dueDate}`).toString().slice(-0, 15)
    );
    taskListItem.appendChild(taskDueDate);

    const dueDate = `${obj.dueDate.replaceAll("-", ", ")}`;

    const overDue = new HTMLElement("span", null, null, null, "overdue-span");
    const isOverDue = isPast(new Date(dueDate));
    if (isOverDue) {
      overDue.textContent = "Overdue";
    }

    return taskListItem;
  }
}
