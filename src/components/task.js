import { parseISO } from 'date-fns';
import { HTMLElement } from './view';

export default class Task {
  constructor(obj) {
    const taskListItem = new HTMLElement(
      'li',
      null,
      null,
      null,
      'task-list-item',
    );
    taskListItem.setAttribute('data-id', `${obj.id}`);

    const leftContainer = new HTMLElement(
      'div',
      null,
      null,
      null,
      'task-left-container',
    );
    taskListItem.appendChild(leftContainer);

    const checkbox = new HTMLElement(
      'input',
      'checkbox',
      'complete',
      null,
      `checkbox-${obj.priority.replace(' ', '-').toLowerCase()}`,
    );
    leftContainer.appendChild(checkbox);

    checkbox.onchange = () => {
      if (checkbox.checked) {
        taskListItem.classList.add('complete');
      } else {
        taskListItem.classList.remove('complete');
      }
    };

    const contentWrap = new HTMLElement(
      'div',
      null,
      null,
      null,
      'content-wrap',
    );
    leftContainer.appendChild(contentWrap);

    const taskTitle = new HTMLElement(
      'span',
      null,
      null,
      null,
      'task-title',
      `${obj.title}`,
    );
    contentWrap.appendChild(taskTitle);

    const taskDesc = new HTMLElement(
      'span',
      null,
      null,
      null,
      'task-desc',
      `${obj.content}`,
    );
    contentWrap.appendChild(taskDesc);

    const rightContainer = new HTMLElement(
      'div',
      null,
      null,
      null,
      'task-right-container',
    );
    taskListItem.appendChild(rightContainer);

    const taskDueDate = new HTMLElement(
      'span',
      null,
      null,
      null,
      'task-due-date',
      `Due: ${parseISO(obj.dueDate).toString().slice(-0, 15)}`,
    );
    rightContainer.appendChild(taskDueDate);

    const detailsBtn = new HTMLElement(
      'button',
      null,
      null,
      null,
      'details-btn',
      'Details',
    );
    rightContainer.appendChild(detailsBtn);

    if (!obj.dueDate) {
      taskDueDate.textContent = '';
    }

    const editBtn = new HTMLElement(
      'button',
      null,
      null,
      null,
      'edit-btn',
      'edit',
    );
    rightContainer.appendChild(editBtn);

    /*  editBtn.onclick = () => {
      const editModal = new EditTaskModal();
      controller.renderTaskModal(editModal);
    }; */

    const deleteBtn = new HTMLElement(
      'button',
      null,
      null,
      null,
      'del-btn',
      'del',
    );
    rightContainer.appendChild(deleteBtn);

    return taskListItem;
  }
}
