<script setup lang="ts">
  import '@/assets/css/main.css'
  import { Toaster } from 'vue-sonner';
</script>

<template>
  <NuxtLoadingIndicator/>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  <Toaster />
</template>
