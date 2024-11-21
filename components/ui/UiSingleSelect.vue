<script setup lang="ts">

  import { onClickOutside } from '@vueuse/core'
  
  interface Props {
    options: { key: string, label: string }[],
    placeholder: string,
    modelValue: string | null
  }

  const emit = defineEmits<{ 'update:modelValue': [key: string | null] }>()
  const props = defineProps<Props>()
  const open = ref(false)
  const target = ref(null)


  onClickOutside(target, () => toggle())

  const selected: ComputedRef<string | null> = computed(() => {
    const find = props.options.find(item => item.key === props.modelValue)
    return find ? find.label : null
  })

  const selectValue = (key: string) => {
    const payload = key === props.modelValue ? null : key
    emit('update:modelValue', payload)
    toggle()
  }

  const toggle = () => { open.value = !open.value }

</script>

<template>
  <div class="select">
    <div class="select--box" @click="toggle">
      <span v-if="selected" class="select--box-selected">{{ selected }}</span>
      <span v-if="!selected && placeholder" class="select--box-placeholder">{{ placeholder }}</span>
      <Icon name="tabler:chevron-down" style="color: var(--dark)" size="22" class="transition" :class="{ 'rotate-180': open, 'rotate-0': !open }" />
    </div>
    <Transition name="select">
      <ul v-if="open" ref="target" class="select--listbox">
        <template v-for="option in options" :key="option.key">
          <li @click="selectValue(option.key)" :class="{ 'selected': option.key === modelValue }">{{ option.label }}</li>
        </template>
      </ul>
    </Transition>
  </div>
</template>