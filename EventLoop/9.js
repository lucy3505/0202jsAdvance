setTimeout(() => {
  //s1
  console.log("setTimeout1");
  setTimeout(() => {
    //s2
    console.log("setTimeout3");
  }, 1000);
  Promise.resolve().then((data) => {
    //p1
    console.log("then1"); //
    console.log("then4"); //
    Promise.resolve().then((detail) => console.log("then6")); //p3
  });
  Promise.resolve().then((data) => {
    //p2
    console.log("then2");
    console.log("then5");
    setTimeout(() => {
      //s3
      console.log("setTimeout2");
    }, 1000);
  });
  console.log(2);
}, 1000);
//setTimeout1
// 2
// then1
// then4
// then2
// then5
// then6
// setTimeout3
// setTimeout2
