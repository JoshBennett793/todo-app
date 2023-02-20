const subscribers = {};

export function subscribe(eventName, callback) {
  if (!subscribers[eventName]) {
    subscribers[eventName] = [];
  }
  subscribers[eventName].push(callback);
}

export function publish(event, data) {
  if (!subscribers[event]) return;
  subscribers[event].forEach((callback) => callback(data));
}
