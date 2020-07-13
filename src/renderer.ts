// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

window.addEventListener("keyup", (ev) => {
  if (ev.key === ":") {
    const commandBar = document.getElementById("command-bar");
    const commandInput = document.getElementById(
      "command-input"
    ) as HTMLInputElement;
    commandBar.style.display = "flex";
    commandInput.focus();

    commandInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        console.log(commandInput.value);
        commandInput.value = "";
      }

      if (
        (e.key === "Backspace" || e.key === "Enter") &&
        commandInput.value === ""
      ) {
        commandBar.style.display = "none";
      }
    });
  }
});
