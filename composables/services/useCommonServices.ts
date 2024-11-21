export const useCommonService = () => {
  const { $customFetch } = useNuxtApp()

  const getBanners = async () => {
    return await $customFetch('/common/banners')
  }

  return { getBanners }
}