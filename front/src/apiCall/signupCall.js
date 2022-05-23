const signupFecth = async (body) => {
  return await fetch(`http://localhost:3000/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((response) => {
      return response.errors;
    })
    .catch((err) => console.error(err));
};

export default signupFecth;
