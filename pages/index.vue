<script setup lang="ts">
  import { useCommonService } from '~/composables/services/useCommonServices';
  import type { Banner } from '~/types/common';

  const services = useCommonService()
  const { data: banners } = await useAsyncData('banners', () => services.getBanners())

</script>

<template>
  <div class="wrapper">
    <ContentHomeSwiper :banners="(banners as Banner[])" />
    <section class="mt-8">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold">Популярні статті</h1>
        <NuxtLink to="/articles" class="outlined-button">Дивитися все</NuxtLink>
      </div>
      <div class="mt-4 flex flex-col gap-4">
        <ContentArticleCard :is-grid="false" />
        <ContentArticleCard :is-grid="false" />
        <ContentArticleCard :is-grid="false" />
        <ContentArticleCard :is-grid="false" />
        <ContentArticleCard :is-grid="false" />
      </div>
    </section>
  </div>
</template>