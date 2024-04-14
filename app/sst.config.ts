/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "hono-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
    };
  },
  async run() {
    // Ensure there is a bucket ...
    const bucket = new sst.cloudflare.Bucket("MyBucket");
    // Ensure there is a worker ...
    const worker = new sst.cloudflare.Worker("MyWorker", {
      handler: "./hono-app/src/index.ts",
      url: true,
      link: [bucket],
    });

    return {
      api: worker.url,
    };
  },
});
