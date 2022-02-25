
/**
 * EventEmitter static class
 * Inspired from https://lolahef.medium.com/react-event-emitter-9a3bb0c719
 */
export const EventEmitter = {
  _events: {},
  dispatch(event, data) {
      console.log("dispatch event : ", event);
    if (!this._events[event]) return;
    this._events[event].forEach(callback => {
        console.log("EventEmitter.dispatch() : ", event, data);
        callback(data)
    })
  },
  subscribe(event, callback) {
      console.log("subscribed event : ", event);
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(callback);
  },
  unsubscribe(event) {
    if (!this._events[event]) return;
    delete this._events[event];
  }
}

/**
 * Enumeration that contains the registrered events 
 * Completely optional but helps the code to be more stable.
 */
export const EVENTS = {
    LocateBtnClicked: "LocateBtnClicked",
}