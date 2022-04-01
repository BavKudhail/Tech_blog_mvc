// Sign Up Logic
const signupFormHandler = async (event) => {
  event.preventDefault();

  //   Store username and password input values into variables
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  console.log(`Signing up ${username}`);

  //   Send a POST request to the API endpoint
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to sign up");
  }
};

// Sign Up form event listnener
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
