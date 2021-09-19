//Box is nothing but an Identity Functor

const Box = (x) => ({
  map: (f) => Box(f(x)),
  toString: () => `Box(${x})`,
});

//test code below
const doubleIt = (x) => x * 2;
const log = (x) => console.log(String(x));
log(Box("A"));
log(Box(5).map(doubleIt));
