/*
{ 
    'click': [handlers]
}
*/

class EventEmitter {
  eventHandlers = new Map();
  subscribe(eventName, handler) {
    if (!this.eventHandlers.has(eventName)) {
      this.eventHandlers.set(eventName, []);
    }
    this.eventHandlers.get(eventName).push(handler);
  }

  publish(eventName, data) {
    this.eventHandlers.get(eventName).forEach((handler) => handler(data));
  }

  unsubscribe(eventName, handler) {
    let arr = this.eventHandlers.get(eventName);
    const index = arr.indexOf(handler);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
}

export default EventEmitter;
