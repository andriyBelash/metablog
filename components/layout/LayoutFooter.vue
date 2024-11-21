<script setup lang="ts"></script>

<template>
  <div class="bg-[var(--dark)] min-h-[100px] flex items-center">
    <div class="wrapper flex items-center justify-between">
      <p class="text-[var(--secondary)]">@Copyright 2024 Blog</p>
      <div class="flex items-center gap-3">
        <a className="text-[var(--background)]" target="blank" href='https://github.com/andriyBelash'>
          <Icon name="uil:github" style="color: var(--secondary)" size="25" />
        </a>
        <a className="text-[var(--background)]" target="blank" href="https://www.linkedin.com/in/andriy-belash-bb90a2250/">
          <Icon name="uil:linkedin" style="color: var(--secondary)" size="25" />
        </a>
      </div>
    </div>
  </div>
</template>