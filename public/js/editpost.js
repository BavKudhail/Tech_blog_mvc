// DOM Variables
const commentForm = document.querySelector("#comment-form");
const submitBtn = document.querySelector(".submit-btn");
const postId = document.querySelector("#post-id").value;
const deleteBtn = document.querySelector(".delete-btn");

// comment form handler
const commentFormHandler = async (event) => {
  // prevent form from refreshing on submit
  event.preventDefault();

  // Place title and content value into variables
  const title = document.querySelector("#new-post-title").value;
  const content = document.querySelector("#new-post-content").value;

  // If post title & post content are true
  if (title && content) {
    //  Send a PUT request
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // If response is successful redirect user to dashboard else alert
    if (response.ok) {
      console.log("POST HAS BEEN SUBMITTED");
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

// Delete post function
const deletePost = async () => {
  // Send DELETE request
  const response = await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });
  // Redirect user to dashboard
  document.location.replace("/dashboard");
};

deleteBtn.addEventListener("click", deletePost);

commentForm.addEventListener("submit", commentFormHandler);
