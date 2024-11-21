<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth';
  import { toTypedSchema } from '@vee-validate/zod';
  import { object, string } from 'zod';
  import { useForm, useField } from 'vee-validate';

  definePageMeta({ layout: 'empty'})

  const store = useAuthStore()

  const validationSchema = toTypedSchema(
    object({
      email: string({ required_error: 'Поле обов`язкове'}).min(1, { message: 'Поле обов`язкове'}).email('Некоректна адреса електронної пошти'),
      password: string({ required_error: 'Поле обов`язкове'}).min(6, { message: 'Поле повинно буде мінімум 6 символів'}),
    })
  )

  const { handleSubmit, errors } = useForm({ validationSchema })

  const { value: email } = useField('email')
  const { value: password } = useField('password')

  const submit = handleSubmit(async (values) => {
    try {
      await store.login(values)
      navigateTo('/')
    } catch (e) {}
  })
</script>

<template>
  <div class="wrapper h-full flex items-center justify-center">
    <div class="p-6 rounded-md border border-[var(--secondary)] bg-[var(--white)] max-w-[500px] w-full">
      <h1 class="text-2xl font-bold mb-4">Вхід</h1>
      <span class="text-[var(--dark)] text-md">Введіть дані для входу</span>
      <form @submit.prevent class="mt-4">
        <div class="flex flex-col gap-2">
          <label class="text-[var(--dark)]">Електронна пошта</label>
          <input v-model="email" type="text" class="border border-[var(--dark)] p-2 rounded-md" />
          <span class="text-red-500 text-sm">{{ errors.email }}</span>
        </div>
        <div class="flex flex-col gap-2 mt-4">
          <label class="text-[var(--dark)]">Пароль</label>
          <input v-model="password" type="password" class="border border-[var(--dark)] p-2 rounded-md" />
          <span class="text-red-500 text-sm">{{ errors.password }}</span>
        </div>
        <button @click="submit" class="w-full mt-8 filled-button text-center justify-center">Увійти</button>
      </form>
    </div>
  </div>
</template>