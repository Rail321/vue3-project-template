<template>
  <store-test-one />
  <store-test-two />
</template>

<script>
  import StoreTestOne from './StoreTestOne.vue'
  import StoreTestTwo from './StoreTestTwo.vue'

  export default {
    components: { StoreTestOne, StoreTestTwo }
  }
</script>