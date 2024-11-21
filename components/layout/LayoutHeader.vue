<script setup lang="ts">
  import { useUserStore } from '~/stores/user';

  const store = useUserStore()
</script>

<template>
  <div class="min-h-[80px] border-b border-[var(--secondary)]">
    <div class="wrapper h-full flex items-center justify-between">
      <NuxtLink to="/" class="transition active:scale-95">
        <NuxtImg src="/logo.svg" alt="logo" width="140" height="80" />
      </NuxtLink>
      <div>
        <template v-if="!store.isAuth">
          <NuxtLink to="/auth/login" class="text-[var(--dark)] outlined-button">Вхід</NuxtLink>
        </template>
        <template v-else>
          <NuxtLink to="/profile/me/articles" class="flex items-center gap-2">
            <NuxtImg 
              :src="store.user?.avatar_url || '/avatar.png'" 
              alt="avatar" 
              width="50" 
              height="50" 
              class="rounded-full border border-[var(--secondary)] h-[50px] w-[50px] object-cover" 
            />
            <div class="flex flex-col">
              <span class="font-bold text-[16px]">{{ store.user?.username }}</span>
              <span class="text-[var(--dark)] text-[14px]">{{ store.user?.email }}</span>
            </div>
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>