import server from "./server";
import config from "./config";
import Logger from "./logger";
import { createServer } from "http";
import { Server } from "socket.io";
import * as Minio from "minio";

export const minioClient = new Minio.Client({
  endPoint: "minio.shobly.org",
  port: 9000,
  useSSL: false,
  accessKey: "tateRbuFaBG4ZI6o",
  secretKey: "H0hX9ilaQW2pChyn3IP1xcuvi1llAjz8",
});

const startServer = async () => {
  const app = await server();
  const httpServer = createServer(app);

  const io = new Server(httpServer, {
    cors: { origin: config.clientHost, credentials: true },
  });

  httpServer.listen(config.port, () => {
    Logger.info(`
      ################################################
      #  Server listening on port: ${config.port}    
      ################################################
    `);
  });
};

(async () => {
  startServer();
})();
