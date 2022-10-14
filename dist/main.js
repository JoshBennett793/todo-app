/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/controller.js":
/*!**************************************!*\
  !*** ./src/components/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");


class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  createTodo = (todo) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("createTodo", todo);
  };

  editTodo = (id, title, content, priority) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("editTodo", id, title, content, priority);
  };

  removeTodo = (id) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("removeTodo", id);
  };

  updateTodoIDs = () => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("updateTodoIDs");
  };

  createNote = (note) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("createNote", note);
  };

  editNote = (id, title, content) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("editNote", id, title, content);
  };

	removeNote = (id) => {
		_index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("removeNote", id);
	}

	updateNoteIDs = () => {
		_index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("updateNoteIDs");
	}
}


/***/ }),

/***/ "./src/components/model.js":
/*!*********************************!*\
  !*** ./src/components/model.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Model)
/* harmony export */ });
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

	editTodo = (id, title, content, priority) => {
		const todo = this.todos.find((todo) => todo.id === id);
		todo.title = title ? title : todo.title;
		todo.content = content ? content : todo.content;
		todo.priority = priority ? priority : todo.priority;
	};

  removeFromTodos = (id) => {
    this.todos = this.todos.filter((todo) => todo.id != id);
  };

  updateTodoIDs = () => {
    for (let todo of this.todos) {
      todo.id = todo.id - 1;
    }
  };

  addToNotes = (obj) => {
    const note = {
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1] + 1 : 1,
      title: obj.title,
      content: obj.content,
    };
    this.notes.push(note);
  };

	editNote = (id, title, content) => {
		const note = this.notes.find(note => note.id === id);
		note.title = title ? title : todo.title;
		note.content = content ? content : todo.content;
	}

	removeFromNotes = (id) => {
		this.notes = this.notes.filter(note => note.id != id);
	}

	updateNoteIDs = () => {
		for (let note of notes) {
			note.id = note.id - 1;
		}
	}
}


/***/ }),

/***/ "./src/components/pubsub.js":
/*!**********************************!*\
  !*** ./src/components/pubsub.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pubsub)
/* harmony export */ });
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


/***/ }),

/***/ "./src/components/view.js":
/*!********************************!*\
  !*** ./src/components/view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
class View {
	
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubsub": () => (/* binding */ pubsub)
/* harmony export */ });
/* harmony import */ var _components_pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pubsub.js */ "./src/components/pubsub.js");
/* harmony import */ var _components_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/model.js */ "./src/components/model.js");
/* harmony import */ var _components_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view.js */ "./src/components/view.js");
/* harmony import */ var _components_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/controller.js */ "./src/components/controller.js");





const pubsub = new _components_pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

class Todo {
  constructor(project, title, content, dueDate, priority) {
    this.project = project;
    this.title = title;
    this.content = content;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

const controller = new _components_controller_js__WEBPACK_IMPORTED_MODULE_3__["default"](new _components_model_js__WEBPACK_IMPORTED_MODULE_1__["default"](), new _components_view_js__WEBPACK_IMPORTED_MODULE_2__["default"]());

pubsub.subscribe("createTodo", controller.model.addToTodos);
pubsub.subscribe("editTodo", controller.model.editTodo);
pubsub.subscribe("removeTodo", controller.model.removeFromTodos);
pubsub.subscribe("updateTodoIDs", controller.model.updateTodoIDs);
pubsub.subscribe("createNote", controller.model.addToNotes);
pubsub.subscribe("editNote", controller.model.editNote);
pubsub.subscribe("removeNote", controller.model.removeNote);
pubsub.subscribe("updateNoteIDs", controller.model.updateNoteIDs);

const note1 = new Note("New Note", "My first note");

const obj1 = new Todo(
  "work",
  "Get work done",
  "Have to do it by 10pm",
  "10/15/2022",
  "medium"
);

controller.createTodo(obj1);
controller.editTodo(3, "Edited title");
controller.createNote(note1);

console.log(controller.model.notes);
console.log(controller.model.todos);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRXRCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCOztBQUVBO0FBQ0EsSUFBSSxxREFBYztBQUNsQjs7QUFFQTtBQUNBLElBQUkscURBQWM7QUFDbEI7O0FBRUE7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCOztBQUVBO0FBQ0EsSUFBSSxxREFBYztBQUNsQjs7QUFFQTtBQUNBLElBQUkscURBQWM7QUFDbEI7O0FBRUE7QUFDQSxFQUFFLHFEQUFjO0FBQ2hCOztBQUVBO0FBQ0EsRUFBRSxxREFBYztBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hGZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ2U7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGNEM7QUFDRjtBQUNGO0FBQ1k7O0FBRXBELG1CQUFtQiw2REFBTTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsaUVBQVUsS0FBSyw0REFBSyxRQUFRLDJEQUFJOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztVQ2xEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gIH1cblxuICBjcmVhdGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICBwdWJzdWIucHVibGlzaChcImNyZWF0ZVRvZG9cIiwgdG9kbyk7XG4gIH07XG5cbiAgZWRpdFRvZG8gPSAoaWQsIHRpdGxlLCBjb250ZW50LCBwcmlvcml0eSkgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZWRpdFRvZG9cIiwgaWQsIHRpdGxlLCBjb250ZW50LCBwcmlvcml0eSk7XG4gIH07XG5cbiAgcmVtb3ZlVG9kbyA9IChpZCkgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwicmVtb3ZlVG9kb1wiLCBpZCk7XG4gIH07XG5cbiAgdXBkYXRlVG9kb0lEcyA9ICgpID0+IHtcbiAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZVRvZG9JRHNcIik7XG4gIH07XG5cbiAgY3JlYXRlTm90ZSA9IChub3RlKSA9PiB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJjcmVhdGVOb3RlXCIsIG5vdGUpO1xuICB9O1xuXG4gIGVkaXROb3RlID0gKGlkLCB0aXRsZSwgY29udGVudCkgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZWRpdE5vdGVcIiwgaWQsIHRpdGxlLCBjb250ZW50KTtcbiAgfTtcblxuXHRyZW1vdmVOb3RlID0gKGlkKSA9PiB7XG5cdFx0cHVic3ViLnB1Ymxpc2goXCJyZW1vdmVOb3RlXCIsIGlkKTtcblx0fVxuXG5cdHVwZGF0ZU5vdGVJRHMgPSAoKSA9PiB7XG5cdFx0cHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVOb3RlSURzXCIpO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICB0aGlzLnRvZG9zID0gW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgcHJvamVjdDogXCJUT1BcIixcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgdGl0bGU6IFwiUHJvamVjdCAxXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiQnVpbGQgTW9kZWxcIixcbiAgICAgICAgZHVlRGF0ZTogXCIxMC0xMy0yMDIyXCIsXG4gICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBwcm9qZWN0OiBcIlRPUFwiLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICB0aXRsZTogXCJQcm9qZWN0IDJcIixcbiAgICAgICAgY29udGVudDogXCJCdWlsZCBDb250cm9sbGVyXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMTAtMTMtMjAyMlwiLFxuICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5ub3RlcyA9IFtdO1xuICB9XG5cbiAgYWRkVG9Ub2RvcyA9IChvYmopID0+IHtcbiAgICBjb25zdCB0b2RvID0ge1xuICAgICAgaWQ6IHRoaXMudG9kb3MubGVuZ3RoID4gMCA/IHRoaXMudG9kb3NbdGhpcy50b2Rvcy5sZW5ndGggLSAxXS5pZCArIDEgOiAxLFxuICAgICAgcHJvamVjdDogb2JqLnByb2plY3QsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgdGl0bGU6IG9iai50aXRsZSxcbiAgICAgIGNvbnRlbnQ6IG9iai5jb250ZW50LFxuICAgICAgZHVlRGF0ZTogb2JqLmR1ZURhdGUsXG4gICAgICBwcmlvcml0eTogb2JqLnByaW9yaXR5LFxuICAgIH07XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICB9O1xuXG5cdGVkaXRUb2RvID0gKGlkLCB0aXRsZSwgY29udGVudCwgcHJpb3JpdHkpID0+IHtcblx0XHRjb25zdCB0b2RvID0gdGhpcy50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCk7XG5cdFx0dG9kby50aXRsZSA9IHRpdGxlID8gdGl0bGUgOiB0b2RvLnRpdGxlO1xuXHRcdHRvZG8uY29udGVudCA9IGNvbnRlbnQgPyBjb250ZW50IDogdG9kby5jb250ZW50O1xuXHRcdHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eSA/IHByaW9yaXR5IDogdG9kby5wcmlvcml0eTtcblx0fTtcblxuICByZW1vdmVGcm9tVG9kb3MgPSAoaWQpID0+IHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT0gaWQpO1xuICB9O1xuXG4gIHVwZGF0ZVRvZG9JRHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgdG9kbyBvZiB0aGlzLnRvZG9zKSB7XG4gICAgICB0b2RvLmlkID0gdG9kby5pZCAtIDE7XG4gICAgfVxuICB9O1xuXG4gIGFkZFRvTm90ZXMgPSAob2JqKSA9PiB7XG4gICAgY29uc3Qgbm90ZSA9IHtcbiAgICAgIGlkOiB0aGlzLm5vdGVzLmxlbmd0aCA+IDAgPyB0aGlzLm5vdGVzW3RoaXMubm90ZXMubGVuZ3RoIC0gMV0gKyAxIDogMSxcbiAgICAgIHRpdGxlOiBvYmoudGl0bGUsXG4gICAgICBjb250ZW50OiBvYmouY29udGVudCxcbiAgICB9O1xuICAgIHRoaXMubm90ZXMucHVzaChub3RlKTtcbiAgfTtcblxuXHRlZGl0Tm90ZSA9IChpZCwgdGl0bGUsIGNvbnRlbnQpID0+IHtcblx0XHRjb25zdCBub3RlID0gdGhpcy5ub3Rlcy5maW5kKG5vdGUgPT4gbm90ZS5pZCA9PT0gaWQpO1xuXHRcdG5vdGUudGl0bGUgPSB0aXRsZSA/IHRpdGxlIDogdG9kby50aXRsZTtcblx0XHRub3RlLmNvbnRlbnQgPSBjb250ZW50ID8gY29udGVudCA6IHRvZG8uY29udGVudDtcblx0fVxuXG5cdHJlbW92ZUZyb21Ob3RlcyA9IChpZCkgPT4ge1xuXHRcdHRoaXMubm90ZXMgPSB0aGlzLm5vdGVzLmZpbHRlcihub3RlID0+IG5vdGUuaWQgIT0gaWQpO1xuXHR9XG5cblx0dXBkYXRlTm90ZUlEcyA9ICgpID0+IHtcblx0XHRmb3IgKGxldCBub3RlIG9mIG5vdGVzKSB7XG5cdFx0XHRub3RlLmlkID0gbm90ZS5pZCAtIDE7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQdWJzdWIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRyYWNrZXIgPSB7XG4gICAgICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFsgZnVuY3MgXVxuICAgIH07XG4gIH1cblxuICBzdWJzY3JpYmUoZXZlbnRuYW1lLCBmdW5jKSB7XG4gICAgaWYgKHRoaXMudHJhY2tlcltldmVudG5hbWVdKSB7XG4gICAgICB0aGlzLnRyYWNrZXJbZXZlbnRuYW1lXS5wdXNoKGZ1bmMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyYWNrZXJbZXZlbnRuYW1lXSA9IFtmdW5jXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZ1bmNzID0gdGhpcy50cmFja2VyW2V2ZW50bmFtZV07XG4gICAgICAgIGNvbnN0IGlkeCA9IGZ1bmNzLmluZGV4T2YoZnVuYyk7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgIGZ1bmNzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaXNoKGV2ZW50bmFtZSwgLi4uYXJncykge1xuICAgIGNvbnN0IGZ1bmNzID0gdGhpcy50cmFja2VyW2V2ZW50bmFtZV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZnVuY3MpKSB7XG4gICAgICBmdW5jcy5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgICAgIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuXHRcbn0iLCJpbXBvcnQgUHVic3ViIGZyb20gXCIuL2NvbXBvbmVudHMvcHVic3ViLmpzXCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RlbC5qc1wiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vY29tcG9uZW50cy92aWV3LmpzXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRyb2xsZXIuanNcIjtcblxuY29uc3QgcHVic3ViID0gbmV3IFB1YnN1YigpO1xuXG5jbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IocHJvamVjdCwgdGl0bGUsIGNvbnRlbnQsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5jbGFzcyBOb3RlIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxufVxuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIobmV3IE1vZGVsKCksIG5ldyBWaWV3KCkpO1xuXG5wdWJzdWIuc3Vic2NyaWJlKFwiY3JlYXRlVG9kb1wiLCBjb250cm9sbGVyLm1vZGVsLmFkZFRvVG9kb3MpO1xucHVic3ViLnN1YnNjcmliZShcImVkaXRUb2RvXCIsIGNvbnRyb2xsZXIubW9kZWwuZWRpdFRvZG8pO1xucHVic3ViLnN1YnNjcmliZShcInJlbW92ZVRvZG9cIiwgY29udHJvbGxlci5tb2RlbC5yZW1vdmVGcm9tVG9kb3MpO1xucHVic3ViLnN1YnNjcmliZShcInVwZGF0ZVRvZG9JRHNcIiwgY29udHJvbGxlci5tb2RlbC51cGRhdGVUb2RvSURzKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJjcmVhdGVOb3RlXCIsIGNvbnRyb2xsZXIubW9kZWwuYWRkVG9Ob3Rlcyk7XG5wdWJzdWIuc3Vic2NyaWJlKFwiZWRpdE5vdGVcIiwgY29udHJvbGxlci5tb2RlbC5lZGl0Tm90ZSk7XG5wdWJzdWIuc3Vic2NyaWJlKFwicmVtb3ZlTm90ZVwiLCBjb250cm9sbGVyLm1vZGVsLnJlbW92ZU5vdGUpO1xucHVic3ViLnN1YnNjcmliZShcInVwZGF0ZU5vdGVJRHNcIiwgY29udHJvbGxlci5tb2RlbC51cGRhdGVOb3RlSURzKTtcblxuY29uc3Qgbm90ZTEgPSBuZXcgTm90ZShcIk5ldyBOb3RlXCIsIFwiTXkgZmlyc3Qgbm90ZVwiKTtcblxuY29uc3Qgb2JqMSA9IG5ldyBUb2RvKFxuICBcIndvcmtcIixcbiAgXCJHZXQgd29yayBkb25lXCIsXG4gIFwiSGF2ZSB0byBkbyBpdCBieSAxMHBtXCIsXG4gIFwiMTAvMTUvMjAyMlwiLFxuICBcIm1lZGl1bVwiXG4pO1xuXG5jb250cm9sbGVyLmNyZWF0ZVRvZG8ob2JqMSk7XG5jb250cm9sbGVyLmVkaXRUb2RvKDMsIFwiRWRpdGVkIHRpdGxlXCIpO1xuY29udHJvbGxlci5jcmVhdGVOb3RlKG5vdGUxKTtcblxuY29uc29sZS5sb2coY29udHJvbGxlci5tb2RlbC5ub3Rlcyk7XG5jb25zb2xlLmxvZyhjb250cm9sbGVyLm1vZGVsLnRvZG9zKTtcblxuZXhwb3J0IHsgcHVic3ViIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==