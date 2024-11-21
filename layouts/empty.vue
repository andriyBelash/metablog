<script setup lang="ts">
</script>

<template>
  <div class="h-[60px] flex items-center justify-center border-b border-[var(--secondary)]">
    <NuxtLink to="/">
      <NuxtImg src="/logo.svg" alt="logo" width="120" height="60" />
    </NuxtLink>
  </div>
  <slot/>
</template>