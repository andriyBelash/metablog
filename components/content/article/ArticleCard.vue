<script setup lang="ts">

  interface Props {
    isGrid?: boolean
  }

  const props = defineProps<Props>()

</script>

<template>
  <div class="article-card" :class="{ 'grid-variant': props.isGrid, 'list-variant': !props.isGrid }">
    <img src="/avatar.png" alt="image" class="article-card--image" />
    <div class="article-card--content">
      <h3 class="font-bold text-2xl text-[var(--dark)]">Title</h3>
      <p class="text-[var(--dark)]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, accusantium non? Est recusandae doloribus nisi quod velit ipsum, exercitationem nostrum fugiat reiciendis tempore eos eveniet non, obcaecati ut totam iusto.</p>
      <div class="flex items-center gap-2">
        <ProfileUserAccount/>
        <div class="dot-separator"></div>
        <Icon name="tabler:calendar-event" style="color: var(--grey)" size="22" />
        <span class="text-[var(--grey)]">22.08.29212</span>
      </div>
      <div class="flex items-center gap-2 overflow-auto hide-scrollbar">
        <div class="article-category">Category</div>
        <div class="article-category">Category</div>
        <div class="article-category">Category</div>
        <div class="article-category">Category</div>
        <div class="article-category">Category</div>
        <div class="article-category">Category</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .article-card {
    border: 1px solid var(--secondary);
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--white);
    padding: 24px;
  }

  .list-variant {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    .article-card--image {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }

    .article-card--content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }

  .grid-variant {
    .article-card--image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .article-card--content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
      
    }
  }
</style>

