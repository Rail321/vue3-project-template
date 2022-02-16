<template>
  <div>
    <h1>Two</h1>

    <pre>{{ allUsers() }}</pre>
  </div>
</template>

<script>
  import useUsers from '@/store/users'

  export default {
    setup() {
      const { allUsers, setUsers } = useUsers()

      setTimeout( () => {
        setUsers([ { name: 'aLukard' }, { name: 'Vue' } ])
      }, 4500 )

      return {
        allUsers
      }
    }
  }
</script>