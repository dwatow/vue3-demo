<script setup></script>

<template>
  <button @click="$router.push({ name: 'home' })">home</button>
  <button @click="$router.push({ name: 'zfComponentShow' })">
    components show
  </button>
  <span class="abcd"></span>
  <RouterView />
</template>

<style scoped lang="scss"></style>
