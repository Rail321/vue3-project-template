<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
  .loader {
    border-radius: 50%;
    border-width: 10px;
    border-style: solid;
    border-color: aquamarine;
    border-bottom-color: transparent;

    animation-name: animate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    
    width: 50px;
    height: 50px;
  }

  @keyframes animate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>