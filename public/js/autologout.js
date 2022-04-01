const inactivityTime = () => {
  let time;
  const resetTimer = () => {
    clearTimeout(time);
    time = setTimeout(logout, 10000);
  };
  window.onload = resetTimer;
  //   DOM
  document.onmousemove = resetTimer;
  document.onkeydown = resetTimer;

  const logout = () => {
    alert("Your session has timed out, please log in again ");
  };
};


