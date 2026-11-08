import { spawn } from "node:child_process";
import { cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const [command, target, ...args] = process.argv.slice(2);
const commands = new Set(["dev", "build", "start"]);
const targets = new Set(["static", "server"]);

if (!commands.has(command) || !targets.has(target)) {
  console.error("Usage: node scripts/run-next.mjs <dev|build|start> <static|server> [...args]");
  process.exit(1);
}

if ((command === "dev" || command === "start") && target !== "server") {
  console.error(`${command} requires the server target.`);
  process.exit(1);
}

const environment = { ...process.env, DEPLOY_TARGET: target };
const nextBin = resolve("node_modules", "next", "dist", "bin", "next");
let executableArgs = [nextBin, command, ...args];
let workingDirectory = process.cwd();

if (command === "start") {
  const standaloneDirectory = resolve(".next-server", "standalone");
  const serverFile = resolve(standaloneDirectory, "server.js");

  if (!existsSync(serverFile)) {
    console.error("Standalone output is missing. Run npm run build:server first.");
    process.exit(1);
  }

  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === "-p" || args[index] === "--port") environment.PORT = args[index + 1];
    if (args[index] === "-H" || args[index] === "--hostname") environment.HOSTNAME = args[index + 1];
  }

  const publicTarget = resolve(standaloneDirectory, "public");
  const staticTarget = resolve(standaloneDirectory, ".next-server", "static");
  if (!existsSync(publicTarget)) {
    cpSync(resolve("public"), publicTarget, { recursive: true, force: true });
  }
  if (!existsSync(staticTarget)) {
    cpSync(resolve(".next-server", "static"), staticTarget, { recursive: true, force: true });
  }

  executableArgs = [serverFile];
  workingDirectory = standaloneDirectory;
}

const child = spawn(process.execPath, executableArgs, {
  cwd: workingDirectory,
  env: environment,
  stdio: "inherit",
});

child.on("error", (error) => {
  console.error(error);
  process.exitCode = 1;
});

child.on("exit", (code, signal) => {
  if (signal) {
    console.error(`Next.js stopped by signal ${signal}.`);
    process.exitCode = 1;
    return;
  }

  process.exitCode = code ?? 1;
});
