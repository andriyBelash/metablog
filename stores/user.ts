import { defineStore } from "pinia";
import { useUserServices } from "~/composables/services/useUserServices";
import type { IUser } from "~/types/user";

export const useUserStore = defineStore("user", () => {

  const UserService = useUserServices()

  const user: Ref<IUser | null> = ref(null)

  const setUser = (data: IUser | null) => { user.value = data }
  const getUser = async () => {
    try {
      const res = await UserService.getUser() as IUser
      setUser(res)
    } catch (error) {
      console.error(error)
    }
  }

  const isAuth: ComputedRef<boolean> = computed(() => !!user.value) 

  return {
    user,
    isAuth,
    setUser,
    getUser,
  }
})