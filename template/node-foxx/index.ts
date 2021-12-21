import { createApp } from "@jimizai/core";
import handler from "./function/handler";

async function main() {
  const app = await createApp({
    middlewares: [handler],
    srcDirs: [],
    port: 3000,
  });

  app.bootstrap();
}

main();
