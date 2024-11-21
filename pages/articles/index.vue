<script setup lang="ts">
import { PROFILE_TABS } from '~/lib/constants/tabs';

</script>

<template>
  <div class="wrapper">
    <div>
      <UiLinkTab :tabs="PROFILE_TABS" selected='articles'  />
    </div>
    <div class="mt-5 flex flex-col gap-4">
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
      <ContentArticleCard :is-grid="false" />
    </div>
  </div>
</template>