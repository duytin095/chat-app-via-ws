<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const messages = ref([]);
const input = ref("");
let socket;

onMounted(() => {
  socket = new WebSocket("ws://localhost:8080");

  socket.onopen = () => {
    console.log("Connected to server");
  };

  socket.onmessage = (event) => {
    messages.value.push(event.data);
  };
});

onBeforeUnmount(() => {
  socket.close();
});

const sendMessage = () => {
  if (input.value.trim() !== "") {
    socket.send(input.value);
    input.value = "";
  }
};
</script>

<template>
  <div class="p-4 max-w-md mx-auto">
    <div class="border p-2 h-64 overflow-y-auto bg-gray-100 mb-2 rounded">
      <div v-for="(msg, i) in messages" :key="i" class="mb-1">
        {{ msg }}
      </div>
    </div>
    <input
      v-model="input"
      @keyup.enter="sendMessage"
      placeholder="Type a message..."
      class="border rounded p-2 w-full mb-2"
    />
    <button @click="sendMessage" class="bg-blue-500 text-white px-4 py-2 rounded">
      Send
    </button>
  </div>
</template>
