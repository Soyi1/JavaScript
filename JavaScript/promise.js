// 06. 22. 2023

// Promise
// new Promise
// 1. state: pending
// 2. result: undefined

// * resolve(value)
// 1. state: fullfilled
// 2. result: value

// * reject(error)
// 1. state: rejected
// 2. result: error

const ex1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 3000)
});

const ex2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('error...'));
    }, 3000)
});

ex1.then(
    function(result) {
        console.log("ex1은 resolve --> 3초 pending 후 resolve");
    }, function(err) {
        console.log("해당 fun 타지 않음.");
    }
);

ex2.then(
    function(result) {
        console.log("해당 fun 타지 않음.");
    }
).catch(
    function(err) {
        console.log("ex1은 reject --> 3초 pending 후 reject");
    }
).finally(
    function() {
        console.log("스크립트 언어는 항상 어렵다. 그 중 제일 이해 하기 힘들었던 Promise");
        console.log("열심히 공부 해서 내 것으로 만들어야지!");
        console.log("나중엔 폴리필 추가 하는 법도 알아보자~");
    }
)