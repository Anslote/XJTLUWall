function asyncTask() {
    console.log('Start');
    sleep(2000).then(() => console.log('End'))
}

const sleep = (ms) => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('slept');
        resolve();
    }, ms);
})

asyncTask();