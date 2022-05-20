const signupFecth = async (body) => {
  await fetch("http://localhost:3000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then(function (res) {
      console.log(
        res.json((body) => {
          console.log(body);
        })
      );

      if (res.status == 400) {
      }
    })
    .catch(function (err) {
      throw err;
    });
};

export default signupFecth;
