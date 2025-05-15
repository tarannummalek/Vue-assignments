<template>
    <div id="app" class="bg-wrapper">
      <header class="bg-dark text-white p-3">
        <h1 >$plit It</h1>
      </header>
      <main class="my-4">
        <router-view />
      </main>
  
      <footer class="bg-light text-center py-3 mb-3">
        <small>&copy; $plit it App</small>
      </footer>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .bg-wrapper {
    min-height: 100vh;
    background: linear-gradient(135deg,#f0f4ff, #ff5c5c);
    padding-bottom: 40px;
  }
  body {
    margin: 0;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
  </style>
  