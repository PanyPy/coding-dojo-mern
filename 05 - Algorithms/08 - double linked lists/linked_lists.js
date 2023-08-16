function SLNode(value) {
  this.val = value;
  this.next = null;
}
function SList() {
  this.head = null;
  this.back = function() {
      if (!this.head) { return null;}
      var runner = this.head;
      while (runner.next)
      { runner = runner.next; }
      return runner.val;
  }
  this.pushBack = function(value) {
      var newNode =new SLNode(value);
      if (!this.head)
      { this.head = newNode; }
      else {
          var runner = this.head;
          while (runner.next)
          { runner = runner.next; }
          runner.next = newNode;
      }
  }
  this.popBack = function() {
      if (!this.head) {return null; }
      var returnVal;
      if (!this.head.next) {
          returnVal = this.head.val;
          this.head = null;
          return returnVal;
      }
      var runner = this.head;
      while (runner.next.next)
      { runner = runner.next; }
      returnVal = runner.next.val;
      runner.next = null;
      return returnVal;
  }
  this.pushFront = function(value){
      var oldHead = this.head;
      this.head = new SLNode(value);
      this.head.next = oldHead;
  }
  this.popFront = function() {
      var returnVal = null;
      if (this.head) {
          returnVal = this.head.val;
          this.head = this.head.next;
      }
      return returnVal;
  }
  this.contains = function(value) {
      var runner = this.head;
      while (runner) {
          if (runner.val === value)
          { return true; }
          runner = runner.next;
      }
      return false;
  }
  this.removeVal = function(value){
      if (!this.head){ return false;}
      if (this.head.val === value) {
          this.head = this.head.next;
          return true;
      }
      var runner = this.head;
      while (runner.next) {
          if(runner.next.val===value){
              runner.next =
              runner.next.next;
              return true;
          }
          runner = runner.next;
      }
      return false;
  }
}
