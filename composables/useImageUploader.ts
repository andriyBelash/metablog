export const useImageUploader = () => {
  const demoImage: Ref<string | null> = ref(null)
  const isDragging = ref(false)

  const uploadImage = (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files && target.files[0]
    if (!file) return
    handleFile(file)
    return file
  }

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return
    demoImage.value = URL.createObjectURL(file)
  }

  const onDrop = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = false
    
    const file = event.dataTransfer?.files[0]
    if (!file) return
    handleFile(file)
  }

  const onDragOver = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = true
  }

  const onDragLeave = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = false
  }

  return {
    demoImage,
    isDragging,
    uploadImage,
    onDrop,
    onDragOver,
    onDragLeave
  }
}