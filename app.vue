<template>
  <header>

  </header>
  <main>
    <NuxtPage />
  </main>
  <footer class="text-center w-full max-w-3xl mx-auto my-6 py-5 container opacity-80 border-t border-solid border-t-gray-200 dark:border-t-gray-800">
    <p class="mb-2"><span>Color Mode:</span>
    <select v-model="$colorMode.preference" style="margin-left: .5rem; background: none;">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select></p>
    <p>&copy; 2023 <NuxtLink style="color: unset; text-decoration: none;" to="https://proj.at">Proj.at</NuxtLink></p>
  </footer>
</template>

<script setup lang="ts">
  import 'assets/main.css';
</script>