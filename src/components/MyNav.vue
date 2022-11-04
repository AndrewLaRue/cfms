<template>
  <section class="row bar justify-content-around">
    <button class=" col-1 btn rounded-circle btn-dark text-light">Home</button>
    <button class=" col-1 btn rounded-circle btn-dark text-light">Shows</button>
    <button class=" col-1 btn rounded-circle btn-dark text-light">Newsletters</button>
    <button class=" col-1 btn rounded-circle btn-dark text-light">History</button>
  </section>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.bar {
  height: 15px;
  background-color: rgb(67, 67, 67);


}

button {
  transform: translateY(-12px);
}
</style>