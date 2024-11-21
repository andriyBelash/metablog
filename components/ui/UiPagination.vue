<script setup lang="ts">
interface Props {
  currentPage: number
  totalPages: number
}

const props = defineProps<Props>()
const router = useRouter()

const goToPage = (page: number): string => {
  const paramsString = Object.keys(router.currentRoute.value.query)
    .filter(key => key !== 'page')
    .map(key => `${key}=${router.currentRoute.value.query[key]}`)
    .join('&')
  return `?${paramsString}&page=${page}`
}

const getVisiblePages = () => {
  const delta = 1 // Кількість сторінок з кожного боку від поточної
  const range: (number | string)[] = []

  if(props.totalPages <= 5) {
    return [...Array(props.totalPages).keys()].map(i => i + 1)
  }
  
  // Завжди показуємо першу сторінку
  range.push(1)
  
  if (props.currentPage - delta > 2) {
    range.push('...')
  }
  
  // Центральна частина
  for (let i = Math.max(2, props.currentPage - delta); 
       i <= Math.min(props.totalPages - 1, props.currentPage + delta); 
       i++) {
    range.push(i)
  }
  
  if (props.currentPage + delta < props.totalPages - 1) {
    range.push('...')
  }
  
  // Завжди показуємо останню сторінку, якщо вона не вже додана
  if (props.totalPages > 1) {
    range.push(props.totalPages)
  }
  
  return range
}
</script>

<template>
  <div class="flex items-center gap-2 justify-center w-full" :key="currentPage">
    <!-- Кнопка "Назад" -->
    <NuxtLink
      v-if="props.currentPage > 1"
      :to="goToPage(props.currentPage - 1)"
      class="text-[var(--dark)] outlined-button"
      style="padding: 8px 8px; font-size: 18px;"
    >
      <Icon name="tabler:chevron-left" size="22" />
    </NuxtLink>

    <!-- Сторінки -->
    <template v-for="page in getVisiblePages()" :key="page">
      <span
        v-if="page === '...'"
        class="px-3 py-1"
      >
        ...
      </span>
      <NuxtLink
        v-else
        :to="goToPage(page as number)"
        class="text-[var(--dark)]"
        style="padding: 6px 12px; font-size: 18px;"
        :class="{
          'filled-button': page === props.currentPage,
          'outlined-button': page !== props.currentPage
        }"
      >
        {{ page }}
      </NuxtLink>
    </template>

    <!-- Кнопка "Вперед" -->
    <NuxtLink
      v-if="props.currentPage < props.totalPages"
      :to="goToPage(props.currentPage + 1)"
      class="text-[var(--dark)] outlined-button"
      style="padding: 8px 8px; font-size: 18px;"
    >
      <Icon name="tabler:chevron-right" size="22" />
    </NuxtLink>
  </div>
</template>