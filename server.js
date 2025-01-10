import http from "http";
import app from "./app.js";

const PORT = 3000;
let server = http.createServer(app);

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`server running in port ${PORT}`);
});
