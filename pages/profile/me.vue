<script setup lang="ts">
  import { PROFILE_TABS } from '~/lib/constants/tabs';

  const route = useRoute()

  const selectedTab = computed(() => route.path.split('/').pop() as string)

  if(!['articles', 'friends'].includes(selectedTab.value)) {
    navigateTo('/profile/me/articles') 
  }

</script>

<template>
  <div class="wrapper">
    <ProfileHeader />
    <div class="mt-6">
      <UiLinkTab :tabs="PROFILE_TABS" :selected="selectedTab" />
      <NuxtPage/>
    </div>
  </div>
</template>