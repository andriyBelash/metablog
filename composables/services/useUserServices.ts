export const useUserServices = () => {
  const { $customFetch } = useNuxtApp()

  const getUser = async () => {
    return await $customFetch('/profile/me')
  }

  return { getUser }
}