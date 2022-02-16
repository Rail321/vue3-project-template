<template>
  <use-test-one />
  <use-test-two />
</template>

<script>
  import UseTestOne from './UseTestOne.vue'
  import UseTestTwo from './UseTestTwo.vue'

  export default {
    components: { UseTestOne, UseTestTwo }
  }
</script>