export default function ($timeout) {

  this.visible = false;

  this.changeState = function ($event) {
    this.loading = true;
    if ($event) {
      $event.stopPropagation();
    }
    if (this.dyFunc) {
      this.dyFunc().then(() => {
      }).finally(() => {
        $timeout(() => {
           this.loading = false;
        })
      })
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
