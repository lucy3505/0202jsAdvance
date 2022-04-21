(() => {
  const target = new Target({
    username: "dxxxxxxxxxxxxx",
    age: 18,
    gender: "female",
    password: "1234567",
  });

  const init = () => {
    console.log(target.username);
  };
  init();
})();
