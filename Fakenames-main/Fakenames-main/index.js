import chalk from "chalk";
import coolFace from "cool-ascii-faces";

export default function coolsolelog(message) {
  console.log(chalk.blue("___________"));
  console.log(chalk.blue("/         \\"));
  console.log(chalk.green(`( ${message} )`));
  console.log(chalk.blue("\\_________/"));
  console.log(chalk.blue("    \\ /    "));
  console.log(chalk.blue("     \\/     "));
  console.log(chalk.yellow(coolFace()));
}
