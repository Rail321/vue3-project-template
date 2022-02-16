import { ref } from 'vue'

const initUseUsers = () => {
  const users = ref([])
  
  const useUsers = () => {
    const allUsers = () => users.value
    const setUsers = payload => users.value = payload
  
    return { allUsers, setUsers }
  }

  return useUsers
}

const useUsers = initUseUsers()

export default useUsers