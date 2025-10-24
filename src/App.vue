<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="p-4 bg-white shadow">
      <nav class="flex gap-4">
        <router-link to="/" class="text-blue-500">Home</router-link>
        <router-link to="/about" class="text-blue-500">About</router-link>
      </nav>
    </header>

    <main class="p-6">
      <!-- This is where the current route component will render -->
      <router-view />
    </main>
  </div>
</template>

<style scoped>
</style>
