const commands = {
  square: {
    info: "draws a square",
    args: "side x? y?",
    func(args: any[]) {
      const [side, x = 0, y = 0] = args;
      const square = new Path2D();
      square.rect(x, y, side, side);

      return square;
    },
  },
  rsquare: {
    info: "draws a square with rounded corners",
    args: "borderRadius side x? y?",
    func(args: any[]) {
      const [borderRadius, side, x = 0, y = 0] = args;
      const rsquare = new Path2D();
      rsquare.rect(x, y, side, side);

      return rsquare;
    },
  },
};

function matchCommand(text: string): any {
  if (text === "") return;

  const match = new RegExp(`^${text}(.*)`);
  const entries = Object.entries(commands).find(([name, data]) =>
    match.test(name)
  );

  return entries ? [...entries, match.exec(entries[0])[1]] : entries;
}

window.addEventListener("keyup", (ev) => {
  if (ev.key === ":") {
    const commandBar = document.getElementById("command-bar");
    const commandInfo = document.getElementById("command-info");
    const commandArgs = document.getElementById("command-args");
    const commandInput = document.getElementById(
      "command-input"
    ) as HTMLInputElement;
    commandBar.style.display = "flex";
    commandInput.focus();

    commandInput.addEventListener("keyup", (e) => {
      const match = matchCommand(commandInput.value);

      commandInfo.innerText = match ? match[1].info : "";
      commandArgs.innerText = match ? `${match[2]} ${match[1].args}` : "";

      commandInput.style.width = commandInput.value.length + "ch";

      if (e.key === "Enter") {
        if (match) console.log(match[1].func(["asd"]));
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
