const setPost = async (formData) => {
  var responseStatus = {};
  return await fetch(`http://localhost:3000/setPost`, {
    method: "POST",
    headers: {
      authorization: localStorage.getItem("token"),
    },
    body: formData,
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

export default setPost;
