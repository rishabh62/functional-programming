//Maybe functor
const Maybe = (x) => ({
  isNothing: x === null || x === undefined,

  //using function declaration instead of lamda function because of 'this'
  map: function (f) {
    return this.isNothing ? Maybe(x) : Maybe(f(x)); //here instead of Maybe(x) we can say 'this' as well
  },
  toString: function () {
    return this.isNothing ? "Nothing" : `Just(${x})`;
  },
});

//test code below
const doubleIt = (x) => x * 2;
const log = (x) => console.log(String(x));
log(Maybe("A"));
log(Maybe(null).map(doubleIt));
log(
  Maybe({ name: "Bob" })
    .map((x) => x.age)
    .map(doubleIt)
);
log(
  Maybe({ name: "Bob", age: 10 })
    .map((x) => x.age)
    .map(doubleIt)
);
