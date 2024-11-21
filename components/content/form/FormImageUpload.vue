<script setup lang="ts">
import '@/assets/css/form.css'
import { useImageUploader } from '~/composables/useImageUploader';

const { demoImage, isDragging, uploadImage, onDrop, onDragOver, onDragLeave } = useImageUploader()
</script>

<template>
  <div class="mt-6">
    <input 
      type="file" 
      class="hidden" 
      id="article-picture" 
      accept="image/*"
      @change="uploadImage"
    />
    <label
      for="article-picture"
      class="cursor-pointer h-[500px] flex items-center justify-center input-file rounded-md relative"
      :class="{ 'dragging': isDragging }"
      @drop="onDrop"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
    >
      <div v-if="!demoImage" class="text-[var(--dark)] text-2xl text-center px-4">
        Натисніть або перетяніть в поле зображення для завантаження
      </div>
      <img 
        v-else 
        :src="demoImage" 
        alt="Uploaded preview" 
        style="width: 100%; height: 100%; object-fit: cover;"
      />
    </label>
  </div>
</template>

<style scoped>
.input-file {
  border: 1px dashed var(--dark);
  transition: all 0.3s ease;
}

.input-file:hover,
.input-file.dragging {
  border: 1px dashed var(--blue);
  background-color: rgba(var(--blue-rgb), 0.05);
}

.input-file.dragging {
  transform: scale(1.01);
}
</style>