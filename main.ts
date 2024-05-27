import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let testCount: number | null = null;
const tests: number[][] = [];
rl.on("line", (line: string) => {
  if (testCount === null) {
    testCount = Number(line.trim());
  } else {
    tests.push(line.trim().split(" ").map(Number));
    if (tests.length === testCount) {
      const result = solve();
      console.log(result);
      process.exit();
    }
  }
});

function solve() {}
