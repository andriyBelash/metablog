export const useAuthServices = () => {
  const { $customFetch } = useNuxtApp()

  const login = async (form: { email: string, password: string }) => {
    return await $customFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(form)
    })
  }

  const logout = async () => {
    return await $customFetch('/auth/logout')
  }

  const refresh = async () => {
    return await $customFetch('/auth/refresh')
  }

  return { login, refresh, logout }
}