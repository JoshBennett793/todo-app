import { subscribe } from './pubsub';
import model from './model';
import { view } from './view';

const Model = model();
const View = view();

export default function init() {
  subscribe('toggleAddTaskBtn', () => {
    Model.toggleAddTaskBtn();
  });

  subscribe('removeTaskModal', (modal) => {
    View.removeTaskModal(modal);
  });

  subscribe('addToTasks', (task) => {
    Model.addToTasks(task);
  });

  subscribe('renderTasks', () => {
    const tasks = Model.getTasks();
    View.renderTasks(tasks);
  });

  subscribe('removeFromTasks', (id) => {
    Model.removeFromTasks(id);
    View.removeTaskFromDOM(id);
  });
}
