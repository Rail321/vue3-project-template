<template>
  <store-test />
  
  <use-test />

  <loader-test />

  <axios-test />

  <entity-class-test />
</template>

<script>
  import StoreTest from '@/test/StoreTest/StoreTest.vue'
  import UseTest from '@/test/UseTest/UseTest.vue'
  import LoaderTest from '@/test/LoaderTest/LoaderTest.vue'
  import AxiosTest from '@/test/AxiosTest/AxiosTest.vue'
  import EntityClassTest from '@/test/EntityClassTest/EntityClassTest.vue'

  export default {
    components: { StoreTest, UseTest, LoaderTest, AxiosTest, EntityClassTest }
  }
</script>
        AxiosTest