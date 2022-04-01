// post Id
const postId = document.querySelector("#hidden-input").value;
const commentForm = document.querySelector("#comment-form");
const submitBtn = document.querySelector(".submit-btn");

// comment form handler
const commentFormHandler = async (event) => {
  event.preventDefault();
  const comment = document.getElementById("comment-content").value;
  console.log(postId);
  console.log(comment);
  //   if there is a comment
  if (comment) {
    console.log("req sent");
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        postId: postId,
        comment: comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // if the response is okay then reload the document
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

console.log("hello world");

commentForm.addEventListener("submit", commentFormHandler);
