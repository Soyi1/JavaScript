// 06. 26. 2023

// * Promise chaining
// * Promise all
// * Promise race

const test1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("finished test1");
        }, 1000);
    });
};

const test2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("finished test2");
        }, 3000);
    });
};

const test3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("finished test3");
        }, 2000);
    });
};

// Promise chaining
test1()
    .then((res) => test2(res))
    .then((res) => test3(res))
    .then((res) => console.log(res))
    .catch(console.log)
    .finally(() => {
        console.log("finished!")
    });


// Promise all
// 하나라도 누락 되는 경우 err return
console.time("x");
Promise.all([test1(), test2(), test3()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});

// Promise race
// 하나라도 먼저 완료 되면 끝남
console.time("x");
Promise.race([test1(), test2(), test3()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});