// Import the classes we need from the "ws" library
import { WebSocketServer, WebSocket } from "ws";

// Create a WebSocket server on port 8080
// This listens for browsers/clients connecting to ws://localhost:8080
const wss = new WebSocketServer({ port: 8080 });

// "connection" event fires every time a new client connects
wss.on("connection", (ws) => {
  // 'ws' here is the socket connection to that one client (like a private phone line)

  // When this client sends us a message:
  ws.on("message", (msg) => {
    console.log("received:", msg.toString());

    // Now, we want to broadcast this message to ALL clients (every tab connected)
    wss.clients.forEach((client) => {
      // Only send if the client is alive and open
      if (client.readyState === WebSocket.OPEN) {
        // Push the same message to that client
        client.send(msg.toString());
      }
    });
  });
});

// Just a log so you know the server is alive
console.log("WebSocket server running on ws://localhost:8080");
