const logout = async () => {
  console.log("clicked logout");
  // fetch request
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  //   If response is successful return to homepage
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};
// when user clicks logout button execute logout function
document.querySelector("#logout").addEventListener("click", logout);
