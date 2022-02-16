<template>
  <div>
    <h1>UseTestOne</h1>

    <button type="button"
      v-on:click="toggle"
    >
      <span>{{ isVisible() ? 'Скрыть' : 'Показать' }}</span>
    </button>

    <p
      v-if="isVisible()"
    >
      <span>Тоглящийся текст</span>
    </p>
  </div>
</template>

<script>
  import useToggle from '@/use/useToggle'

  export default {
    setup() {
      return {
        ...useToggle()
      }
    }
  }
</script>