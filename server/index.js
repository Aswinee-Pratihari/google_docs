import express from "express";
import "dotenv/config";
import { createServer } from "http";
import cors from "cors";
import { Server } from "socket.io";
import connectDB from "./connectDB.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT"],
  },
});

const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
  res.send("hello!!!");
});
io.on("connection", (socket) => {
  socket.on("get-document", (documentId) => {
    const data = "";
    socket.join(documentId);
    socket.emit("load-document", data);

    socket.on("send-changes", (delta) => {
      socket && socket.broadcast.to(documentId).emit("recieve-changes", delta);
    });
  });
  console.log("user connected");
  console.log(socket.id);
});

server.listen(PORT, () => {
  connectDB();
});
