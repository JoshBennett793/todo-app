/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQdWJzdWIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRyYWNrZXIgPSB7XG4gICAgICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFsgZnVuY3MgXVxuICAgIH07XG4gIH1cblxuICBzdWJzY3JpYmUoZXZlbnRuYW1lLCBmdW5jKSB7XG4gICAgaWYgKHRoaXMudHJhY2tlcltldmVudG5hbWVdKSB7XG4gICAgICB0aGlzLnRyYWNrZXJbZXZlbnRuYW1lXS5wdXNoKGZ1bmMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyYWNrZXJbZXZlbnRuYW1lXSA9IFtmdW5jXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZ1bmNzID0gdGhpcy50cmFja2VyW2V2ZW50bmFtZV07XG4gICAgICAgIGNvbnN0IGlkeCA9IGZ1bmNzLmluZGV4T2YoZnVuYyk7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgIGZ1bmNzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaXNoKGV2ZW50bmFtZSwgLi4uYXJncykge1xuICAgIGNvbnN0IGZ1bmNzID0gdGhpcy50cmFja2VyW2V2ZW50bmFtZV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZnVuY3MpKSB7XG4gICAgICBmdW5jcy5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgICAgIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcHVic3ViID0gbmV3IFB1YnN1YigpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=