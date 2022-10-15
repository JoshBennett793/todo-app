import { taskModal } from "./modal.js";

export default class View {
  renderTaskModal(modal) {
    document.body.appendChild(modal);
  }

  removeTaskModal(modal) {
    document.body.removeChild(modal);
  }
}
