// 06. 28. 2023
// Prototype
// 상속

const car = {
    wheels: 4,
    drive() {
        console.log("drive");
    },
};

const bmw = {
    color: "red",
    navigation: 1,
};

bmw.__proto__ = car;

const x5 = {
    color: "white",
    name: "x5",
};

x5.__proto__ = bmw;