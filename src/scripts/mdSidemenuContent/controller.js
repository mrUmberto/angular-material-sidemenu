export default function () {

  this.visible = false;

  this.changeState = function ($event) {
    if ($event) {
      $event.stopPropagation();
    }
    if (this.dyFunc) {
      this.dyFunc();
    }
    this.visible = !this.visible;
  };

  this.runClick = function ($event) {
    if ($event) {
      $event.stopPropagation();
    }
    if (this.clickFunc) {
      this.clickFunc();
    }
  }
}
