class Pubsub {
  constructor() {
    this.tracker = {
      // key: eventname, value: [ funcs ]
    };
  }

  subscribe(eventname, func) {
    if (this.tracker[eventname]) {
      this.tracker[eventname].push(func);
    } else {
      this.tracker[eventname] = [func];
    }
    return {
      unsubscribe: () => {
        const funcs = this.tracker[eventname];
        const idx = funcs.indexOf(func);
        if (idx > -1) {
          funcs.splice(idx, 1);
        }
      },
    };
  }

  publish(eventname, ...args) {
    const funcs = this.tracker[eventname];
    if (Array.isArray(funcs)) {
      funcs.forEach((func) => {
        func.apply(null, args);
      });
    }
  }
}

const pubsub = new Pubsub();

class Todo {
  constructor(id, project, title, content, dueDate, priority) {
    this.id = id;
    this.project = project;
    this.title = title;
    this.content = content;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Model {
  constructor() {
    this.projects = [];
    this.todos = [
      {
        id: 1,
        project: "TOP",
        completed: false,
        title: "Project 1",
        content: "Build Model",
        dueDate: "10-13-2022",
        priority: "high",
      },
      {
        id: 2,
        project: "TOP",
        completed: false,
        title: "Project 2",
        content: "Build Controller",
        dueDate: "10-13-2022",
        priority: "high",
      },
    ];
    this.notes = [];
  }

  addToTodos = (obj) => {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      project: obj.project,
      completed: false,
      title: obj.title,
      content: obj.content,
      dueDate: obj.dueDate,
      priority: obj.priority,
    };
    this.todos.push(todo);
  };

  removeFromTodos = (id) => {
    this.todos = this.todos.filter((todo) => todo.id != id);
  };

  updateTodoIDs = () => {
    for (let todo of this.todos) {
      todo.id = todo.id - 1;
    }
  };

  editTodo = (id, title, content, priority) => {
    const todo = this.todos.find((todo) => todo.id === id);
    todo.title = title ? title : todo.title;
    todo.content = content ? content : todo.content;
    todo.priority = priority ? priority : todo.priority;
  };
}

class View {
  constructor() {}
}

class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  createTodo = (todo) => {
    pubsub.publish("createTodo", todo);
  };

  editTodo = (id, title, content, priority) => {
    pubsub.publish("editTodo", id, title, content, priority);
  };

  removeTodo = (id) => {
    pubsub.publish("removeTodo", id);
  };

  updateIDs = () => {
    pubsub.publish("updateIDs");
  };
}

const controller = new TodoController(new Model(), new View());

pubsub.subscribe("createTodo", controller.model.addToTodos);
pubsub.subscribe("editTodo", controller.model.editTodo);
pubsub.subscribe("removeTodo", controller.model.removeFromTodos);
pubsub.subscribe("updateIDs", controller.model.updateTodoIDs);