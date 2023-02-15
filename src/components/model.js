export default function Model() {
  const projects = [];
  const tasks = [];
  const notes = [];

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
    console.log(tasks);
  };

  const editTask = (id, title, content, priority) => {
    const task = this.tasks.find((task) => task.id === id);
    task.title = title ? title : task.title;
    task.content = content ? content : task.content;
    task.priority = priority ? priority : task.priority;
  };

  const removeFromTasks = (id) => {
    tasks = tasks.filter((task) => task.id != id);
  };

  const updateTaskIDs = () => {
    for (let task of tasks) {
      task.id = task.id - 1;
    }
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
    notes = notes.filter((note) => note.id != id);
  };

  const updateNoteIDs = () => {
    for (let note of notes) {
      note.id = note.id - 1;
    }
  };

  const toggleAddTaskBtn = () => {
    const addTaskBtn = document.querySelector('#add-task-btn');
    if (!addTaskBtn.disabled) {
      addTaskBtn.disabled = true;
    } else {
      addTaskBtn.disabled = false;
    }
  };

  return {
    addToTasks,
    editTask,
    removeFromTasks,
    updateTaskIDs,
    addToNotes,
    editNote,
    removeFromNotes,
    updateNoteIDs,
    toggleAddTaskBtn,
  };
}
