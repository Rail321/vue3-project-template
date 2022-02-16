<template>
  <div>
    <h1>One</h1>

    <pre>{{ allUsers() }}</pre>
  </div>
</template>

<script>
  import useUsers from '@/store/users'

  export default {
    setup() {
      const { allUsers, setUsers } = useUsers()

      setTimeout( () => {
        setUsers([ { name: 'Rail' } ])
      }, 3000 )

      return {
        allUsers
      }
    }
  }
</script>
