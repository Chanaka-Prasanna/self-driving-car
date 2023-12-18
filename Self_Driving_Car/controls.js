class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;
    this.#addKeyboardListeners();
  }
  // This is private method
  #addKeyboardListeners() {
    // if I do not use arrow function,
    // then this keyward  refers to the function. not to the varables above
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = true;
          break;

        case "ArrowRight":
          this.right = true;
          break;

        case "ArrowUp":
          this.forward = true;
          break;

        case "ArrowDown":
          this.reverse = true;
          break;
      }
      console.table(this);
    };

    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = false;
          break;

        case "ArrowRight":
          this.right = false;
          break;

        case "ArrowUp":
          this.forward = false;
          break;

        case "ArrowDown":
          this.reverse = false;
          break;
      }
      console.table(this);
    };
  }
}
