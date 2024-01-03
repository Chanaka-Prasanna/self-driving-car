class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acceleration = 0.2;
    this.maxSpeed = 3;
    this.friction = 0.05;
    this.angle = 0;

    this.controls = new Controls();
  }

  update() {
    this.#move();
  }

  #move() {
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }

    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    }

    if (this.speed < 0) {
      this.speed += this.friction;
    }

    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    // left and right direction and manage reverse of the car

    if (this.speed != 0) {
      const flip = this.speed > 0 ? 1 : -1;
      if (this.controls.left) {
        this.angle += 0.03 * flip;
      }

      if (this.controls.right) {
        this.angle -= 0.03 * flip;
      }
    }

    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
    // this.y -= this.speed;
  }
  draw(ctx) {
    ctx.save(); // save the context
    ctx.translate(this.x, this.y); // tralslate car to x and y
    ctx.rotate(-this.angle); // rotate
    ctx.beginPath();
    // rect -> rectangle to drw a car
    ctx.fillStyle = "#0e7678";
    ctx.fillRect(
      -this.width / 2, // X-coordinate of the top-left corner of the rectangle
      -this.height / 2, // Y-coordinate of the top-left corner of the rectangle
      this.width,
      this.height
    );
    ctx.fill();

    ctx.restore(); // to remove the infinit rotation and translation
  }
}
