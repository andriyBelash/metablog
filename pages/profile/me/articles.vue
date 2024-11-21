<script setup lang="ts">
  import { ArticlesStatus } from '@/lib/constants/data';
  import { useSearchParams } from '~/composables/useSearchParams';

  const { selectedType, page, toggleType } = useSearchParams()

  const temporaryCategories = [
    { key: 'all', label: 'Всі' },
    { key: 'category1', label: 'Категорія 1' },
    { key: 'category2', label: 'Категорія 2' },
    { key: 'category3', label: 'Категорія 3' },
    { key: 'category4', label: 'Категорія 4' },
    { key: 'category5', label: 'Категорія 5' },
    { key: 'category6', label: 'Категорія 6' },
  ]


  const singleSelect: Ref<string | null> = ref(null)
  const multiselect: Ref<string[]> = ref([])

</script>

<template>
  <section class="mt-8">
    <div class="flex items-end justify-between">
      <h1 class="text-2xl font-bold">Мої статті</h1>
      <div class="change-view">
        <button @click="toggleType('list')" :class="{ 'active': selectedType === 'list' }">
          <Icon name="tabler:list" size="22" />
        </button>
        <button @click="toggleType('grid')" :class="{ 'active': selectedType === 'grid' }">
          <Icon name="mdi:view-grid" size="28" />
        </button>
      </div>
    </div>
    <div class="mt-4 grid grid-cols-2 gap-4">
      <UiMultiselect v-model="multiselect" :options="temporaryCategories" placeholder="Виберіть" />
      <UiSingleSelect v-model="singleSelect" :options="ArticlesStatus" placeholder="Виберіть" />
    </div>
    <NuxtLink to="/articles-form/create" class="outlined-button cursor-pointer w-max ml-auto mt-8">
      <Icon name="tabler:plus" size="22" />
      Створити нову статтю
    </NuxtLink>
    <div :class="{ 'grid-container': selectedType === 'grid', 'list-container': selectedType === 'list' }" class="mt-8">
      <template v-for="i in 5">
        <ContentArticleCard :is-grid="selectedType === 'grid'" />
      </template>
    </div>
    <UiPagination
      class="mt-8"
      :current-page="page"
      :total-pages="5"
    />
  </section>
</template>