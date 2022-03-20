function b(x, y, a) {
  // a = 10;
  // console.log(arguments[2]);
  arguments[2] = 5;
  console.log(a);
}

b(1, 2, 3);
