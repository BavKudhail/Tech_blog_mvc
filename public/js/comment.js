// DOM Variables
const postId = document.querySelector("#hidden-input").value;
const commentForm = document.querySelector("#comment-form");
const submitBtn = document.querySelector(".submit-btn");

// comment form handler
const commentFormHandler = async (event) => {
  // prevent form from refreshing
  event.preventDefault();

  // Place our comment inside a variable
  const comment = document.getElementById("comment-content").value;

  //   if there is a comment
  if (comment) {
    // execute the POST request
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
    // If resonse is successful reload the page - else - alert
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

console.log("hello world");

commentForm.addEventListener("submit", commentFormHandler);
