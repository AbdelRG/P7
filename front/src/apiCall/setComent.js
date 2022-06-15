const setComent = async (text, postId) => {
  var responseStatus = {};

  return await fetch(`http://localhost:3000/setComent`, {
    method: "POST",
    headers: {
      authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: text, postId: postId }),
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

export default setComent;
