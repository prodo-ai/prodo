import * as Express from "express";
import * as http from "http";
import * as path from "path";

export const createBundlerServer = async (
  entryFile: string,
  outDir: string,
  port: number,
): Promise<any> => {
  const app = Express();
  app.use(Express.static(outDir));
  app.get("/*", async (_request: any, response: any) => {
    response.sendFile(entryFile);
  });

  const httpServer = new http.Server(app);
  await new Promise(resolve => httpServer.listen(port, resolve));

  return {
    port,
    server: httpServer,
  };
};

export const createStaticServer = async (
  entryFile: string,
  port: number,
): Promise<any> => {
  const dir = path.dirname(entryFile);

  const app = Express();
  app.use(Express.static(dir));
  app.get("/*", async (_request, response) => {
    response.sendFile(entryFile);
  });

  const httpServer = new http.Server(app);
  await new Promise(resolve => httpServer.listen(port, resolve));

  return {
    port,
    server: httpServer,
  };
};
