export default function () {

  this.visible = false;

  this.changeState = function ($event) {
    console.log('state change is called');
    if (this.dyFunction) {
      this.dyFunction().then(() => {
        this.visible = !this.visible;
      })
    }
    else {
      this.visible = !this.visible;
    }
    if ($event) {
      $event.stopPropagation();
    }
  };

  this.runClick = function () {
    if (this.clickFunc) {
      this.clickFunc();
    }
  }
}
