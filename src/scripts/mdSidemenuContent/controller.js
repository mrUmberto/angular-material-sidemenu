export default function() {

  this.visible = false;

  this.changeState = function($event) {
    this.visible = !this.visible;
    $event.stopPropagation();
  };

}
