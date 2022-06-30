const getAllUsers = async () => {
  const response = await fetch(`http://localhost:3000/getAllUsers`, {
    method: "GET",
    headers: { authorization: localStorage.getItem("token") },
  });

  if (response.ok) {
    let value = await response.json();

    return value;
  } else {
    console.log(
      "fetch() promise succeeded, but not with response.ok",
      response.status
    );
    throw new Error(`Got status ${response.status}`);
  }
};
export default getAllUsers;
