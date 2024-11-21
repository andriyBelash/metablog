<script setup lang="ts">
  import { ArticleFormStatus } from '~/lib/constants/data';

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
  const editorContent = ref('')


</script>

<template>
  <div class="wrapper">
    <section class="p-6 bg-white border border-[var(--secondary)] rounded-md">
      <h1 class="text-2xl font-bold">Створити статтю</h1>
      <ContentFormImageUpload />
      <div class="mt-8 border-b border-[var(--grey)]"></div>
      <div class="mt-4 grid grid-cols-3 gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-[var(--dark)]">Категорії</label>
          <UiMultiselect v-model="multiselect" :options="temporaryCategories" placeholder="Виберіть" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-[var(--dark)]">Статус</label>
          <UiSingleSelect v-model="singleSelect" :options="ArticleFormStatus" placeholder="Виберіть" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-[var(--dark)]">Мітка</label>
          <input placeholder="Мітка" type="text" class="border border-[var(--dark)] p-2 rounded-md" />
        </div>
      </div>
      <div class="flex flex-col gap-1 mt-6">
        <label class="text-[var(--dark)]">Заголовок</label>
        <input placeholder="Заголовок" type="text" class="border border-[var(--dark)] p-2 rounded-md" />
      </div>
      <p class="mt-1">Слаг: ahdkjasa-asda-sd-asdasd</p>
      <div class="mt-6">
        <label class="text-[var(--dark)] block mb-3">Текст</label>
        <ContentFormEditor />
      </div>
    </section>
  </div>
</template>