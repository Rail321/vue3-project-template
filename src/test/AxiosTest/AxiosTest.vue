<template>
  <div>
    <h1>AxiosTest</h1>

    <p>
      <pre>{{ axiosData }}</pre>
    </p>
  </div>
</template>

<script>
  import CommentsRequestsService from '@/requests/requestServices/CommentsRequestService'
  import { ref } from 'vue'

  export default {
    setup() {
      const axiosData = ref([])

      const response = CommentsRequestsService.get({
        params: {
          '_limit': 2
        }
      })

      response
        .then(response => {
          const data = response.data
          axiosData.value = data
        })

      return { axiosData }
    }
  }
</script>