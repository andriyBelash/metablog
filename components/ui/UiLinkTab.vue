<script setup lang="ts">
  interface Props {
    tabs: { key: string, label: string }[],
    selected: string
  }

  const props = defineProps<Props>()
</script>

<template>
  <div class="flex gap-3">
    <NuxtLink 
      v-for="tab in props.tabs" 
      :key="tab.key" 
      :to="tab.key" 
      class="text-[var(--dark)]"
      style="padding: 6px 12px; font-size: 18px;" 
      :class="{ 'filled-button': tab.key === props.selected, 'outlined-button': tab.key !== props.selected }">
      {{ tab.label }}
    </NuxtLink>
  </div>
</template>