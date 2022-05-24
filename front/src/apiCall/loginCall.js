const loginFecth = async (body) => {
  var responseStatus = {};
  return await fetch(`http://localhost:3000/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => {
      responseStatus.status = response.status;
      return response.json();
    })
    .then((response) => {
      responseStatus.response = response;
      return responseStatus;
    })
    .catch((err) => console.error(err));
};

export default loginFecth;
