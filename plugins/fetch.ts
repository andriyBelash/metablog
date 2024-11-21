// plugins/fetch.ts
import type { FetchOptions, FetchResponse } from 'ofetch'
import { STORAGE_KEYS } from '~/types/enum'
import { CookieService } from '~/lib/services/CookieService'
import { useAuthServices } from '~/composables/services/useAuthServices'

type CustomFetchResponse<T> = FetchResponse<T>

// Розширюємо типи для Nuxt
declare module '#app' {
  interface NuxtApp {
    $customFetch: typeof $fetch
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $customFetch: typeof $fetch
  }
}

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()
  const AuthService = useAuthServices()

  type CustomFetchType = typeof $fetch
  
  const customFetch: CustomFetchType = $fetch.create({
    baseURL: config.public.url as string,
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    onRequest({ options }) {
      const token = CookieService.getCookie(STORAGE_KEYS.TOKEN)
      
      if (token) {
        (options as FetchOptions).headers = {
          ...options.headers,
          'Authorization': `Bearer ${token}`
        }
      }
    },
    onResponse<T>({ response }: { response: CustomFetchResponse<T> }) {
      return response._data
    },
    async onResponseError({ response }: { response: CustomFetchResponse<any> }) {
      if (response.status === 401) {
      }
      await AuthService.logout()
      CookieService.deleteCookie(STORAGE_KEYS.TOKEN)
      return Promise.reject(response._data)
    }
  })

  return {
    provide: {
      customFetch
    }
  }
})