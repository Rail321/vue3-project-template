const { ref } = require("vue");

const useToggle = () => {
  const visible = ref(false)

  const isVisible = () => visible.value

  const toggle = () => visible.value = !visible.value

  return { isVisible, toggle }
}

export default useToggle