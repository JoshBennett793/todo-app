// eslint-disable-next-line import/no-cycle
import init from './components/controller';
import './css/index.css';
import './css/modal.css';
import './css/task.css';

document.addEventListener('DOMContentLoaded', () => init());
