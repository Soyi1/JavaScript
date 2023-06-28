// 06. 28. 2023
// Prototype

const Bmw = function(color) {
    this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.navigation = 1;
Bmw.prototype.drive = function() {
    console.log("drive");
};
Bmw.prototype.stop = function() {
    console.log("STOP");
};

const x5 = new Bmw("red");
const z4 = new Bmw("blue");