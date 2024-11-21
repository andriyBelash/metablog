<script setup lang="ts">
  import type { Banner } from '~/types/common';
  import { SwiperPagination, SwiperAutoplay } from '#imports';

  defineProps<{ banners: Banner[]}>()

</script>

<template>
  <Swiper
    style="overflow: hidden;"
    :modules="[SwiperPagination, SwiperAutoplay]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 8000, disableOnInteraction: true }"
  >
    <template v-for="banner in banners" :key="banner.id">
      <SwiperSlide class="slide">
        <a :href="banner.url" target="_blank">
          <img :src="banner.logo" :alt="banner.title" class="w-full h-full object-cover absolute inset-0 z-[0]" />
          <div class="absolute inset-0 p-[24px] pb-[48px] z-[1] bg-[rgba(0,0,0,0.5)] flex flex-col gap-4 justify-end">
            <h1 class="text-6xl font-bold text-[var(--white)]">{{ banner.title }}</h1>
            <p class="text-2xl text-[var(--white)]">{{ banner.content }}</p>
          </div>
        </a>
      </SwiperSlide>
    </template>
  </Swiper>
</template>

<style>
  .slide{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark);
    color: var(--white);
    border-radius: 8px;
    overflow: hidden;
  }
</style>