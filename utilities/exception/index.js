import React from "react";

class Exception {
  constructor() {
    this.snackBarRef = React.createRef();
  }

  message(messages) {
    while (this.snackBarRef.current === undefined) {}
    this.snackBarRef.current.show(messages);
  }
}
let exception = new Exception();

export default exception;
