<script setup lang="ts">

  import { onClickOutside } from '@vueuse/core'

  interface Option { key: string, label: string }
  
  interface Props {
    options: Option[],
    placeholder: string,
    modelValue: string[]
  }

  const emit = defineEmits<{ 'update:modelValue': [key: string[]] }>()
  const props = defineProps<Props>()
  const open = ref(false)
  const target = ref(null)


  onClickOutside(target, () => toggle())

  const selected: ComputedRef<Option[]> = computed(() => {
    return props.modelValue.map(key => {
      const find = props.options.find(item => item.key === key) as Option
      return find
    })
  })

  const selectValue = (key: string) => {
    const payload = props.modelValue.includes(key) ? props.modelValue.filter(item => item !== key) : [...props.modelValue, key]
    emit('update:modelValue', payload)
  }

  const toggle = () => { open.value = !open.value }

</script>

<template>
  <div class="select multiselect">
    <div class="select--box" @click="toggle">
      <div v-if="selected.length" class="select--tags-container hide-scrollbar">
        <template v-for="option in selected" :key="option.key">
          <div class="select--tag">
            {{ option.label }}
            <Icon name="tabler:x" style="color: var(--dark)" size="18" class="transition pointer" @click.stop="selectValue(option.key)" />
          </div>
        </template>
      </div>
      <span v-if="!selected.length && placeholder" class="select--box-placeholder">{{ placeholder }}</span>
      <Icon name="tabler:chevron-down" style="color: var(--dark)" size="22" class="transition" :class="{ 'rotate-180': open, 'rotate-0': !open }" />
    </div>
    <Transition name="select">
      <ul v-if="open" ref="target" class="select--listbox">
        <template v-for="option in options" :key="option.key">
          <li 
            @click="selectValue(option.key)" 
            :class="{ 'selected': modelValue.includes(option.key) }"
            class="flex items-center gap-2"
          >
          <Icon v-if="modelValue.includes(option.key)" name="tabler:check" style="color: var(--white)" size="22" class="transition" />
          {{ option.label }}
        </li>
        </template>
      </ul>
    </Transition>
  </div>
</template>