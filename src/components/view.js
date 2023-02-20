import { publish } from './pubsub';
import TaskModal from './modal';
import Task from './task';

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

const taskContainer = document.querySelector('#task-container');

export function view() {
  const renderTaskModal = () => {
    const modal = new TaskModal();
    document.body.appendChild(modal);
  };

  const renderEditModal = (modal) => {
    document.body.appendChild(modal);
  };

  const removeTaskModal = (modal) => {
    document.body.removeChild(modal);
  };

  const renderTasks = (tasks) => {
    tasks.forEach((task) => {
      if (taskContainer.querySelector(`[data-id="${task.id}"]`)) {
        return;
      }
      taskContainer.appendChild(new Task(task));
    });
  };

  const deleteBtnHandler = (id) => {
    publish('removeFromTasks', id);
  };

  const removeTaskFromDOM = (id) => {
    const taskToRemove = taskContainer.querySelector(`[data-id="${id}"]`);
    taskContainer.removeChild(taskToRemove);
  };

  return {
    renderTaskModal,
    renderEditModal,
    removeTaskModal,
    renderTasks,
    deleteBtnHandler,
    removeTaskFromDOM,
  };
}

const View = view();
const addTaskBtn = document.querySelector('#add-task-btn');

addTaskBtn.onclick = () => {
  publish('toggleAddTaskBtn');
  View.renderTaskModal();
};

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('details-btn')) {
    const parentNode = e.target.closest('.task-list-item');
    const taskDesc = parentNode.getElementsByClassName('task-desc');
    console.log(taskDesc[0]);
    taskDesc[0].style.visibility =
      taskDesc[0].style.visibility === 'visible' ? 'hidden' : 'visible';
  } else if (e.target.classList.contains('edit-btn')) {

	} else if (e.target.classList.contains('del-btn')) {
    const taskID = e.target.closest('.task-list-item').dataset.id;
    View.deleteBtnHandler(taskID);
  }
});
