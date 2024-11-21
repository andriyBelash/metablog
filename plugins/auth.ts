import { useUserStore } from "~/stores/user";

export default defineNuxtPlugin(async (nuxtApp) => {
  // Перевіряємо чи запит виконується на сервері
  if (process.server) {
    const store = useUserStore()
    try {
      await store.getUser()
    } catch (error) {
      console.error('Failed to fetch user:', error)
    }
  }
})