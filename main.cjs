const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineLength = 2;
const lines = [];
rl.on("line", (line) => {
  lines.push(line);
  if (lines.length === lineLength) {
    const result = solve(lines);
    console.log(result);
    process.exit();
  }
});

function solve(lines) {
  const [n, k] = lines[0].trim().split(" ").map(Number);
  const as = lines[1].trim().split(" ").map(Number);
  let r = 0;
  let i = 0;
  while (true) {
    i += k;
    r++;
    if (i >= as.length) {
      break;
    }

    i--;
  }
  return r;
}
