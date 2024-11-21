<script setup lang="ts">
  import { QuillEditor } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css';

  const toolbar = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ align: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    ['link', 'image', 'video'],
    ['clean'],
  ]
</script>

<template>
  <QuillEditor style="height: 500px;" :toolbar="toolbar" content-type="html" theme="snow" />
</template>