import server from './server';
import config from './config';
import Logger from './logger';
import { createServer } from 'http';
import { Server } from 'socket.io';
import * as Minio from 'minio';

export const minioClient = new Minio.Client({
  endPoint: '10.41.0.135',
  port: 9000,
  useSSL: false,
  accessKey: 'U6jugialJ8jfkcpA',
  secretKey: 'tEmGQoj3jWtR3o8MP4fxZeNkobdEO7Zk'
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
