const getComentsByPostId = async (postId) => {
  const response = await fetch(`http://localhost:3000/getComentsByPostId`, {
    method: "POST",
    headers: {
      authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId: postId }),
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
export default getComentsByPostId;
