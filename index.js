function sumAsync(a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1000);
}

console.log("before");
sumAsync(40, 2, function (result) {
  console.log("Result:", result);
});

console.log("after");
