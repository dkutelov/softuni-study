const events = {};

module.exports = {
  // publish, emit, trigger
  publish(eventName, param) {
    if (!events[eventName]) {
      return;
    }

    events[eventName].forEach((callback) => {
      callback(param);
    });
  },
  // subscribe, on
  subscribe(eventName, callback) {
    events[eventName] = events[eventName] || [];

    events[eventName].push(callback);
  },
  unsubscribe(eventName, callback) {
    // find in events and remove the specific callback
  },
};
