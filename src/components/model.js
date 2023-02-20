const projects = [];
let tasks = [];
let notes = [];

export default function model() {
  const toggleAddTaskBtn = () => {
    const addTaskBtn = document.querySelector('#add-task-btn');
    console.log(addTaskBtn);
    addTaskBtn.style.pointerEvents =
      addTaskBtn.style.pointerEvents === 'none' ? 'auto' : 'none';
  };

  const addToTasks = (obj) => {
    const task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      project: obj.project,
      completed: false,
      title: obj.title,
      content: obj.content,
      dueDate: obj.dueDate,
      priority: obj.priority,
    };
    tasks.push(task);
  };

  const getTasks = () => tasks;

  const editTask = (id, title, content, priority) => {
    const task = this.tasks.find((task) => task.id === id);
    task.title = title ? title : task.title;
    task.content = content ? content : task.content;
    task.priority = priority ? priority : task.priority;
  };

  const removeFromTasks = (id) => {
    const parsedID = parseInt(id);
    tasks = tasks.filter((task) => task.id !== parsedID);
  };

  const updateTaskIDs = () => {
    // reassign every obj id in task array
  };

  const addToNotes = (obj) => {
    const note = {
      id: notes.length > 0 ? notes[notes.length - 1] + 1 : 1,
      title: obj.title,
      content: obj.content,
    };
    notes.push(note);
  };

  const editNote = (id, title, content) => {
    const note = notes.find((note) => note.id === id);
    note.title = title ? title : note.title;
    note.content = content ? content : note.content;
  };

  const removeFromNotes = (id) => {
    notes = notes.filter((note) => note.id !== id);
  };

  const updateNoteIDs = () => {
    for (const note of notes) {
      note.id -= 1;
    }
  };

  return {
    toggleAddTaskBtn,
    addToTasks,
    getTasks,
    editTask,
    removeFromTasks,
    updateTaskIDs,
    addToNotes,
    editNote,
    removeFromNotes,
    updateNoteIDs,
  };
}
