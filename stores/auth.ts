import { defineStore } from 'pinia'
import { CookieService } from '~/lib/services/CookieService'
import { useAuthServices } from '~/composables/services/useAuthServices'
import { STORAGE_KEYS } from '~/types/enum'
import { toast } from 'vue-sonner'
import { useUserStore } from './user'
import type { IUser } from '~/types/user'

export const useAuthStore = defineStore('auth', () => {

  const AuthService = useAuthServices()
  const store = useUserStore()
  
  const login = async (form: { email: string, password: string }) => {
    try {
      const res = await AuthService.login(form) as { access_token: string, user: IUser }
      const { access_token, user } = res
      CookieService.setCookie(STORAGE_KEYS.TOKEN, access_token)
      store.setUser(user)
      return Promise.resolve(user)
    } catch (error) {
      const message = (error as Error)?.message
      if (message) toast.error(message)
      return Promise.reject(error)
    }
  }

  return { login }
})