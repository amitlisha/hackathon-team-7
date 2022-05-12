const Minio = require("minio");

const minioClient = new Minio.Client({
  endPoint: "minio.shobly.org",
  port: 9000,
  useSSL: false,
  accessKey: "tateRbuFaBG4ZI6o",
  secretKey: "H0hX9ilaQW2pChyn3IP1xcuvi1llAjz8",
});

export default minioClient;
