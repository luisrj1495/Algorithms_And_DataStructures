setTimeout(() => console.log('set timeout'), 0);

Promise.resolve().then(() => console.log('promise1 resolved'));
Promise.resolve().then(() => {
  console.log('promise2 resolved');
  process.nextTick(() => console.log('promise2 next tick'));
});
Promise.resolve().then(() => console.log('promise3 resolved'));

process.nextTick(() => console.log('next tick'));