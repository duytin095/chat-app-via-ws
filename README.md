<h1>README (Plain Markdown View)</h1>
<pre># Simple Chat App (Vue + Node.js + WebSocket)

A minimal real-time chat demo built with:

- **Vue 3** (frontend)
- **Node.js** with the `ws` library (backend WebSocket server)

This is not WhatsApp, it’s a proof of concept to learn how WebSockets work.

---

## Features

- Real-time messaging between multiple browser tabs
- Lightweight backend using WebSocket protocol (`ws`)
- Simple Vue frontend with an input box and chat log

---

## Project Structure

📦 chat-demo
┣ 📂client # Vue frontend
┃ ┣ 📜App.vue
┃ ┣ 📜main.js
┃ ┗ ...
┣ 📂server # Node backend
┃ ┗ 📜server.js
┣ 📜package.json
┗ 📜README.md

---

## Setup

### 1. Backend (WebSocket server)

cd server
npm install
node server.js

Server will start on ws://localhost:8080.

### 2. Frontend (Vue client)

cd client
npm install
npm run dev

Visit: http://localhost:5173

Open two browser tabs to see messages sync in real time.

---

## Example

- Tab A sends: hello world
- Tab B instantly sees: hello world

---

## Notes

- This demo uses plain WebSockets (no authentication, no persistence).
- If you refresh, chat history disappears.
- Built purely for learning purposes.

---

## License

MIT – go wild.
