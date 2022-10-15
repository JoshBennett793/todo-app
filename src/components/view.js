import { taskModal } from "./modal.js";


export default class View {
  renderTaskModal() {
    document.body.appendChild(new taskModal());
  }

	removeTaskModal() {};
}
