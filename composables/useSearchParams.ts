export const useSearchParams = () => {
  const route = useRoute()

  const selectedType: ComputedRef<'list' | 'grid'> = computed(() => {
    return route.query.type && route.query.type === 'grid' ? 'grid' : 'list'
  })

  const navigateToParams = (query: Record<string, any>) => {
    navigateTo({ query: { ...route.query, ...query } })
  }

  const toggleType = (type: 'list' | 'grid') => {
    if(selectedType.value === type) return

    navigateToParams({ type })
  }

  const page = computed(() => {
    return route.query.page ? Number(route.query.page) : 1
  })

  return {
    selectedType,
    page,
    toggleType
  }
}