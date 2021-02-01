import { resolve } from "path";
import { fork } from "child_process";

const processFile = resolve(__dirname, "process.ts");
console.log("Starting process:", processFile);
fork(processFile);
