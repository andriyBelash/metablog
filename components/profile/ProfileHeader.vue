<script lang="ts" setup>

  const editState = reactive({
    username: false,
    email: false
  })

  const toggleEdit = (type: 'email' | 'username') => {
    editState[type] = !editState[type]
  }

</script>

<template>
  <div class="border border-[var(--secondary)] p-6 rounded-md bg-[var(--white)] flex items-end justify-between">
    <div class="flex items-center gap-3">
      <div>
        <!-- avatar -->
         <input type="file" id="avatar" class="hidden" />
         <label for="avatar" class="cursor-pointer">
           <NuxtImg src="/avatar.png" alt="avatar" width="100" height="100" class="rounded-md border border-[var(--secondary)]" />
         </label>
      </div>
      <div class="flex flex-col gap-2">
        <!-- username -->
        <template v-if="editState.username">
          <div class="flex items-center gap-2">
            <input type="text" class="border border-[var(--dark)] p-2 rounded-md" />
            <div class="flex items-center gap-2">
              <button class="icon-button" @click="toggleEdit('username')">
                <Icon name="tabler:check" style="color: var(--dark)" size="22" />
              </button>
              <button class="icon-button" @click="toggleEdit('username')">
                <Icon name="tabler:x" style="color: var(--dark)" size="22" />
              </button>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="flex items-center gap-2">
            <span class="text-4xl font-bold">username</span>
            <button class="icon-button" @click="toggleEdit('username')">
              <Icon name="tabler:pencil" style="color: var(--dark)" size="22" />
            </button>
          </div>
        </template>
         <!-- email -->
         <template v-if="editState.email">
          <div class="flex items-center gap-2">
            <input type="text" class="border border-[var(--dark)] p-2 rounded-md" />
            <div class="flex items-center gap-2">
              <button class="icon-button" @click="toggleEdit('email')">
                <Icon name="tabler:check" style="color: var(--dark)" size="22" />
              </button>
              <button class="icon-button" @click="toggleEdit('email')">
                <Icon name="tabler:x" style="color: var(--dark)" size="22" />
              </button>
            </div>
          </div>
         </template>
          <template v-else>
            <div class="flex items-center gap-2">
              <span class="text-2xl">email</span>
              <button class="icon-button" @click="toggleEdit('email')">
                <Icon name="tabler:pencil" style="color: var(--dark)" size="22" />
              </button>
            </div>
          </template>
      </div>
    </div>
    <button class="filled-button">
      <Icon name="mdi:logout" style="color: var(--white)" size="22" />
      Вийти
    </button>
  </div>
</template>