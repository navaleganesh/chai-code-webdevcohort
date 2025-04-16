function Counter() {
    this.count = 0;
}

Counter.prototype.increment = function() {
    this.count++;
    console.log(this.count);
};
Counter.prototype.decrement = function() {
    this.count--;
    console.log(this.count);
};


let counter = new Counter()

counter.increment()
counter.decrement()